import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lots of Love xo · Made personal. Sent with love.",
  description: "Personalised cards, invitations and thoughtful paper goods. Choose a design, add your little details, and make it yours.",
  other: {
    "codex-preview": "development",
    "lots-of-love-version": "v7-photo-hero-no-emojis",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
