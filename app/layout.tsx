import type { Metadata } from "next";

import { I18nProvider } from "@/lib/i18n";

import "./globals.css";

export const metadata: Metadata = {
  title: "TeamClawHub — Workflow Community",
  description: "Community Workflow Marketplace",
  metadataBase: new URL("https://teamclawhub.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "https://teamclawhub.com",
    siteName: "TeamClawHub",
    title: "TeamClawHub — Workflow Community",
    description: "Community Workflow Marketplace"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
