import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const belleza = Belleza({
  weight: "400", // Specify the desired weight
  subsets: ["latin"], // Specify the necessary subsets
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grocery Trackr",
  description:
    "Grocery Trackr is a smart home inventory app that helps you and your family keep track of grocery items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-purple-100 dark:bg-purple-950">
      <body className={belleza.className} suppressHydrationWarning={true}>
        <div className="flex bg-purple-100 dark:bg-purple-950">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
