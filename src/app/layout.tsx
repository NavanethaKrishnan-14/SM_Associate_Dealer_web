import type { Metadata } from "next";
import "./globals.css";
import "./detail.css";

export const metadata: Metadata = {
 title: "SM Associate Cars | Buy & Sell Pre-Owned Cars",
 description: "Discover pre-owned cars or get started selling yours with SM Associate Cars.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
