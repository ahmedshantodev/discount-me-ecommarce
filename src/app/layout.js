import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";

const primaryFont = Roboto({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "700"],
});

const secondaryFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Discount Me - A Genius Deal For Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable} bg-[#FDFDFD]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
