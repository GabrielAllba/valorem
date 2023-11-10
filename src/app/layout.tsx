import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Valorem | Valuasi Kekayaan Intelektual",
  description: "Solusi mudah, aman dan terpercaya untuk valuasi kekayaan intelektual Anda",
  icons: "valorem.jpeg",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="bg-white" lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
