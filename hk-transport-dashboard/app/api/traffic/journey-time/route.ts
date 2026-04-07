import { NextResponse } from "next/server";
import { getJourneyTimes } from "@/services/traffic/journey-time.service";
export async function GET() { return NextResponse.json(await getJourneyTimes()); }
