import { connectMongoDB } from "@/lib/mongodb";
import Applications from "@/models/applications";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullname, email, phone, pdfUrl, experience, bio, job } =
    await request.json();
  await connectMongoDB();
  await Applications.create({
    fullname,
    email,
    phone,
    pdfUrl,
    experience,
    bio,
    job,
  });
  return NextResponse.json(
    { message: "Successfully applied for this position" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const applications = await Applications.find();
  return NextResponse.json({ applications });
}
