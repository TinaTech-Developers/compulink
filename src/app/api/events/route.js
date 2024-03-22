import { connectMongoDB } from "@/lib/mongodb";
import Event from "@/models/events";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, date, imageUrl, venue, description } = await request.json();
  await connectMongoDB();
  await Event.create({ title, date, imageUrl, venue, description });
  return NextResponse.json({ message: "Event created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const events = await Event.find();
    return NextResponse.json({ events });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Event.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Event deleted" },
    {
      status: 200,
    }
  );
}
