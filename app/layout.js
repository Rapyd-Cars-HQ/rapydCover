import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";

const Satoshi = localFont({
  src: "./font/Satoshi.ttf",
  display: "swap",
});

export const metadata = {
  title: "Rapyd Cover",
  description: "Book a ride to get around town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Satoshi.className}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
