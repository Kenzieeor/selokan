import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shopcart Online Store",
  description: "Shopcart Online Store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 min-h-[350px]">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
