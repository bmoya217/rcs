import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";
import { serviceMetadata } from "@/lib/seo";

const service = services["tile-cleaning"];

export const metadata: Metadata = serviceMetadata("tile-cleaning");

export default function Page() {
  return <ServicePage service={service} />;
}
