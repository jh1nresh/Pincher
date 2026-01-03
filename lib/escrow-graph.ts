
import { StateGraph, END, Annotation } from "@langchain/langgraph";

// Define the State using Annotation
export const EscrowAnnotation = Annotation.Root({
  rideId: Annotation<string>({ reducer: (x, y) => y ?? x, default: () => "" }),
  status: Annotation<'idle' | 'collecting' | 'awaiting_approval' | 'locked' | 'refunded'>({ 
    reducer: (x, y) => y ?? x, 
    default: () => "idle" 
  }),
  signatures: Annotation<string[]>({ reducer: (x, y) => y ?? x, default: () => [] }),
  participants: Annotation<string[]>({ reducer: (x, y) => y ?? x, default: () => [] }),
  totalExpected: Annotation<number>({ reducer: (x, y) => y ?? x, default: () => 0 }),
  expiry: Annotation<number>({ reducer: (x, y) => y ?? x, default: () => 0 }),
  approved: Annotation<boolean>({ reducer: (x, y) => y ?? x, default: () => false }),
  messages: Annotation<string[]>({ reducer: (x, y) => x.concat(y), default: () => [] }),
});

export type EscrowState = typeof EscrowAnnotation.State;

// Node 1: Escrow Vault Node (Checks condition)
const escrowVaultNode = (state: EscrowState): Partial<EscrowState> => {
  const now = Date.now();
  
  // Timeout Check
  if (now > state.expiry && state.status !== 'locked') {
      return { 
          status: 'refunded', 
          messages: ['Timeout reached. Triggering refund flow.'] 
      };
  }

  // Signature Check
  if (state.signatures.length >= state.totalExpected) {
      // Transition to HITL Approval instead of Locking immediately
      return { 
          status: 'awaiting_approval', 
          messages: ['Signatures verified. Waiting for User Approval (HITL)...'] 
      };
  }

  return { 
      status: 'collecting',
      messages: [] 
  };
};

// Node 1.5: User Approval Node (HITL)
// Node 1.5: User Approval Node (HITL)
const approvalNode = (state: EscrowState): Partial<EscrowState> => {
    if (state.approved) {
        return {
            status: 'locked',
            messages: ['User Approved. Funds Locked in Vault.']
        };
    }
    // Stay in waiting state
    return {
        messages: []
    };
};

// Node 2: Refund Trigger (Simulation)
// Node 2: Refund Trigger (Simulation)
const refundTrigger = (state: EscrowState): Partial<EscrowState> => {
    // In a real system, this would call the contract refund function
    return {
        messages: [`Refund processed for ${state.participants.join(', ')}`]
    };
};

// Node 3: Ride Trigger (Simulation)
// Node 3: Ride Trigger (Simulation)
const rideTrigger = (state: EscrowState): Partial<EscrowState> => {
    // Calls the Dispatch API
    return {
        messages: [`Ride ${state.rideId || 'pending'} dispatched. HailingAgent automatically triggered for Uber Sandbox.`]
    };
};

// Build Graph
const workflow = new StateGraph(EscrowAnnotation)
    .addNode("vault", escrowVaultNode)
    .addNode("approval", approvalNode)
    .addNode("refund", refundTrigger)
    .addNode("dispatch", rideTrigger)
    .addEdge("__start__", "vault");

workflow.addConditionalEdges(
    "vault",
    (state) => {
        if (state.status === 'refunded') return "refund";
        if (state.status === 'awaiting_approval') return "approval";
        return END; 
    }
);

workflow.addConditionalEdges(
    "approval",
    (state) => {
        if (state.status === 'locked') return "dispatch";
        return END; 
    }
);

workflow.addEdge("refund", END);
workflow.addEdge("dispatch", END);

export const escrowGraph = workflow.compile();
