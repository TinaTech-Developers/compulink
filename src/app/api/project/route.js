import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, imageUrl } = await request.json();
  await connectMongoDB();
  await Project.create({ title, description, imageUrl });
  return NextResponse.json({ message: "Project created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const project = await Project.find();
  return NextResponse.json({ project });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Project deleted" },
    {
      status: 200,
    }
  );
}
