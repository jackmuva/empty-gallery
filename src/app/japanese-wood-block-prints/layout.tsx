import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery of Japanese Woodblock Prints",
  description: "Gallery of prints curated by Jack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="min-h-full flex flex-col">{children}</body>
  );
}
