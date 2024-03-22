import { connectMongoDB } from "@/lib/mongodb";
import Vaccant from "@/models/vaccant";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const vaccant = await Vaccant.findOne({ _id: id });
  return NextResponse.json({ vaccant }, { status: 200 });
}
