import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Navigation from "@/Components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Kweyu",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />{children}<Navigation/></body>
    </html>
  );
}
