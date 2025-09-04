import "./globals.css";
import type { Metadata } from "next";
import { SITE_NAME, BASE_URL, DEFAULT_OG, TW_HANDLE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Independent analysis on geopolitics, economy, and security.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  creator: TW_HANDLE,
  images: [DEFAULT_OG],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="container flex-1 py-6">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
