import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RainbowProvider from "@/providers/rainbow-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darwinia Governance",
  description: "Darwinia Governance, Democracy, Referenda, Proposal, OpenGov",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RainbowProvider>{children}</RainbowProvider>
      </body>
    </html>
  );
}
