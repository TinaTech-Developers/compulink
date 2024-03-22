import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Compulink Holdings",
  description:
    "Welcome to compulink systems. Compulink Systems has been in the IT Ecosystem for 30 Years. In these years Compulink Systems has managed to deliver high standard ..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
