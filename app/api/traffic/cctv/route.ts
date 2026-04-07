import { NextResponse } from "next/server";
import { getTrafficCctv } from "@/services/traffic/cctv.service";
export async function GET() { return NextResponse.json(await getTrafficCctv()); }
