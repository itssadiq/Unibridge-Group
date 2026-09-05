import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata = {
  title: "Unibridge Group | Bridging Education, Building Futures",
  description: "At Unibridgegroup, we believe education is the most powerful tool for transforming lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-unibridge-light text-unibridge-dark antialiased overflow-x-hidden selection:bg-unibridge-red selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
