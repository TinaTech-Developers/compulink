import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Define environment variables
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

// Export the authentication options
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authentication error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: NEXTAUTH_SECRET, // Use the defined environment variable
  pages: {
    signIn: "/dashboard",
  },
};

// Create the authentication handler
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };

export const generateStaticParams = () => {
  // Define any static params needed for authentication routes
  return {
    // Example: if you need to provide the provider to the route
    providers: ["credentials"],
  };
};
