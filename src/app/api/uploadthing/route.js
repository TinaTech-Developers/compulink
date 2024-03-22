import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

// export async function POST(request) {
//   const { imageUrl , } = await request.json();
//   await connectMongoDB();

//   await Gallery.create({ imageUrl });
//   return NextResponse.json({ message: "Gallery created" }, { status: 201 });
// }
