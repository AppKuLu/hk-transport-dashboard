import { NextResponse } from "next/server";
import { getCitybusEta } from "@/services/bus/ctb-eta.service";
export async function GET() { return NextResponse.json(await getCitybusEta()); }
