import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/reusable/Footer";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartInitializer from "./CartInitializer ";

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
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} bg-[#f8fafc]`}
      >
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          <CartInitializer />
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
