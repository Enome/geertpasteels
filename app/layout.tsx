import cx from "classnames";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geert Pasteels",
  description: "Creative Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          font.className,
          "font-extralight",
          "bg-gray-50",
          "md:py-4",
          "print:bg-white",
          "print:py-0",
        )}
      >
        {children}
      </body>
    </html>
  );
}
