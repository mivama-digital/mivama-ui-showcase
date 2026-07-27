import type { Metadata } from "next";
import "./globals.css";
import { ShowcaseShell } from "./_components/showcase-shell";

export const metadata: Metadata = {
  title: "Mivama UI Lab",
  description: "Interactive component catalog for @mivama/ui",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><ShowcaseShell>{children}</ShowcaseShell></body>
    </html>
  );
}
