import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";
import { serviceMetadata } from "@/lib/seo";

const service = services["marble-and-travertine"];

export const metadata: Metadata = serviceMetadata("marble-and-travertine");

export default function Page() {
  return <ServicePage service={service} />;
}
