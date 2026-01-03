
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: "To use Generative UI, please use the Server Action 'streamRideOptimization' in @/app/actions/gen-ui",
    status: "active"
  });
}
