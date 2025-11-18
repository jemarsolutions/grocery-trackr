import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
import SidebarWrapper from "@/components/SidebarWrapper";
import { Toaster } from "@/components/ui/sonner";

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
    <html
      lang="en"
      className="bg-purple-100 dark:bg-purple-950"
      suppressHydrationWarning={true}
    >
      <body className={belleza.className} suppressHydrationWarning={true}>
        <div className="flex bg-purple-100 dark:bg-purple-950">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute right-3 bottom-3">
              <ModeToggle />
            </div>

            <SidebarWrapper />
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
