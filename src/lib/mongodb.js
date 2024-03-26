import mongoose from "mongoose";

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGOBD_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
}

// export const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://tinashephiri0:FZWRIex7Uu5DTbig@cluster0.dvzxjl9.mongodb.net/compulink_systems"
//     );
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB: ", error);
//   }
// };
