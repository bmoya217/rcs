import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="card-padded group block transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-brand-soft p-3 text-brand">
          <Icon className="size-6" />
        </div>
        <ArrowRight className="size-5 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
      </div>
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand">{service.eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black">{service.title}</h3>
      <p className="mt-4 leading-7 text-muted">{service.summary}</p>
    </Link>
  );
};
