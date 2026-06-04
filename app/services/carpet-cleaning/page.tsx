import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";
import { serviceMetadata } from "@/lib/seo";

const service = services["carpet-cleaning"];

export const metadata: Metadata = serviceMetadata("carpet-cleaning");

export default function Page() {
  return <ServicePage service={service} />;
}
