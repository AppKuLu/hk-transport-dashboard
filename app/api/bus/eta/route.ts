import { NextResponse } from "next/server";
import { getCitybusEta } from "@/services/bus/ctb-eta.service";

export async function GET() {
  try {
    const data = await getCitybusEta();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load bus ETA data" },
      { status: 500 }
    );
  }
}