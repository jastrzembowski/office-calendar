import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import { Navbar, Wrapper } from "@/components";

import "./globals.scss";

const playfair = Playfair_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Office Calendar",
  description: "Office Calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <Navbar/>
          <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
