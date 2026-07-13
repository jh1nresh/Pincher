/* eslint-disable jsdoc/require-jsdoc */
import { NextRequest, NextResponse } from "next/server";
import { getPincherMcpMetadata, handlePincherMcpRequest } from "@/lib/pincher-mcp";

export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "content-type,authorization,mcp-session-id",
    },
  });
}

export async function GET() {
  return NextResponse.json(getPincherMcpMetadata(), {
    headers: {
      "access-control-allow-origin": "*",
    },
  });
}

export async function POST(request: NextRequest) {
  const key = process.env.MCP_API_KEY;
  const authorized = Boolean(key && request.headers.get("authorization") === `Bearer ${key}`);
  if (key && !authorized) {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32001, message: "Unauthorized." } },
      { status: 401 },
    );
  }

  const body = await request.json();
  const result = await handlePincherMcpRequest(body, {
    access: authorized ? "full" : "public",
  });
  return NextResponse.json(result, {
    headers: {
      "access-control-allow-origin": "*",
    },
  });
}
