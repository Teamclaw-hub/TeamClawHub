import type { Metadata } from "next";

import { IntroPage } from "@/components/weclihub/intro-page";

export const metadata: Metadata = {
  title: "Wecli — Local AI Workspace | WecliHub",
  description:
    "Meet Wecli: a local-first AI workspace with OASIS workflows, OASIS Town, GraphRAG memory, Team Creator, and WecliHub as the flow distribution layer.",
  alternates: {
    canonical: "/intro"
  },
  openGraph: {
    url: "https://wecli.net/intro",
    title: "Wecli — Local AI Workspace | WecliHub",
    description:
      "Run AI teams locally, design workflows visually, and share reusable flows through WecliHub."
  }
};

export default function Page() {
  return <IntroPage />;
}
