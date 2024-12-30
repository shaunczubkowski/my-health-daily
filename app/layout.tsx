import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const ralewaySansSerif = Raleway({
  variable: "--font-raleway-sans-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Health Daily",
  description: "Generated by create next app",
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewaySansSerif.variable} antialiased`}>
        <div className="flex flex-col h-screen max-h-screen">
          <div className="flex-grow overflow-y-auto">{children} </div>
        </div>
      </body>
    </html>
  );
}
