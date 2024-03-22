import { connectMongoDB } from "@/lib/mongodb";
import Vaccant from "@/models/vaccant";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    jobTitle,
    branch,
    duties,
    qualifications,
    contract,
    salary,
    department,
  } = await request.json();
  await connectMongoDB();
  await Vaccant.create({
    jobTitle,
    branch,
    duties,
    qualifications,
    contract,
    salary,
    department,
  });
  return NextResponse.json({ message: "Vaccant created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const vaccant = await Vaccant.find();
  return NextResponse.json({ vaccant });
}
