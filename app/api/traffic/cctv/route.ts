export const runtime = "edge";

import { NextResponse } from "next/server";
import { getTrafficCctv } from "@/services/traffic/cctv.service";

export async function GET() {
  try {
    const data = await getTrafficCctv();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load CCTV data" },
      { status: 500 }
    );
  }
}