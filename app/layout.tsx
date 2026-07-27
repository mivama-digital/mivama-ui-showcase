import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mivama UI Lab",
  description: "Interactive component catalog for @mivama/ui",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
