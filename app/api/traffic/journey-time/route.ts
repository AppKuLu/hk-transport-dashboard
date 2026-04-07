export const runtime = "edge";

import { NextResponse } from "next/server";
import { getJourneyTimes } from "@/services/traffic/journey-time.service";

export async function GET() {
  try {
    const data = await getJourneyTimes();
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to load journey time data" }, { status: 500 });
  }
}
