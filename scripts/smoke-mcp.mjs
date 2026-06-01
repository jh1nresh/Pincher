const baseUrl = process.env.PINCHER_MCP_URL || "http://localhost:3000/api/mcp";
const apiKey = process.env.MCP_API_KEY;

async function post(payload) {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok || body.error) {
    throw new Error(`MCP request failed: ${response.status} ${JSON.stringify(body)}`);
  }

  return body;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const initialize = await post({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: { protocolVersion: "2025-06-18" },
});
assert(initialize.result?.serverInfo?.name === "pincher", "initialize did not return Pincher");

const tools = await post({ jsonrpc: "2.0", id: 2, method: "tools/list" });
const toolNames = tools.result?.tools?.map(tool => tool.name) || [];
for (const requiredTool of ["list_side_events", "find_rides", "create_ride", "join_ride"]) {
  assert(toolNames.includes(requiredTool), `missing MCP tool: ${requiredTool}`);
}

const events = await post({
  jsonrpc: "2.0",
  id: 3,
  method: "tools/call",
  params: {
    name: "list_side_events",
    arguments: { query: "sui", limit: 3 },
  },
});
const structuredEvents = events.result?.structuredContent?.events || [];
assert(structuredEvents.length > 0, "list_side_events returned no events");

console.log(
  `Pincher MCP smoke passed: ${toolNames.length} tools, ${structuredEvents.length} event result(s).`,
);
