import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";
import { serviceMetadata } from "@/lib/seo";

const service = services["repair-and-stretch"];

export const metadata: Metadata = serviceMetadata("repair-and-stretch");

export default function Page() {
  return <ServicePage service={service} />;
}
