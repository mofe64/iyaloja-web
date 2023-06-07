import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iyaloja",
  description: "Essential tools to manage your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-white">
      <body className={inter.className + " "}>{children}</body>
    </html>
  );
}
