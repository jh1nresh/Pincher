import { NextRequest, NextResponse } from "next/server";

/**
 * Weather API endpoint handler
 *
 * Simple public endpoint that returns weather data.
 *
 * @param _ - Incoming Next.js request
 * @returns JSON response with weather data
 */
export async function GET(_: NextRequest) {
  return NextResponse.json(
    {
      report: {
        weather: "sunny",
        temperature: 72,
      },
    },
    { status: 200 },
  );
}
