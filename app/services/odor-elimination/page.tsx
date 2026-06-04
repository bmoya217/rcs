import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";
import { serviceMetadata } from "@/lib/seo";

const service = services["odor-elimination"];

export const metadata: Metadata = serviceMetadata("odor-elimination");

export default function Page() {
  return <ServicePage service={service} />;
}
