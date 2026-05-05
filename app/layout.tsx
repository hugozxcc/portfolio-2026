import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadil Nugroho | Software Engineer",
  description:
    "One-page portfolio for Fadil Nugroho, a Computer Science undergraduate and software engineer focused on backend systems, databases, APIs, and production tooling.",
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
