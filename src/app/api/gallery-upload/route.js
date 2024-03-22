import { connectMongoDB } from "@/lib/mongodb";
import Gallery from "@/models/gallery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { projectName, company, description, imageUrl } = await request.json();
  await connectMongoDB();
  await Gallery.create({ projectName, company, description, imageUrl });
  return NextResponse.json({ message: "Gallery created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const gallery = await Gallery.find();
  return NextResponse.json({ gallery });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Gallery.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Gallery deleted" },
    {
      status: 200,
    }
  );
}
