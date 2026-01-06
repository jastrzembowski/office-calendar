import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import { Navbar, Toast, Wrapper } from "@/components";

import "./globals.scss";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("session");
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <Toast/>
        <Navbar isAdmin={!!isAdmin}/>
          <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
