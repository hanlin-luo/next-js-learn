import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Suspense } from "react";
import { CreateFormSkeleton } from "@/app/ui/skeletons";

export default function Page() {
  const customersPromise = fetchCustomers();

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          { label: "Create Invoice", href: "/invoices/create", active: true },
        ]}
      />
      <Suspense fallback={<CreateFormSkeleton />}>
        <Form customersPromise={customersPromise} />
      </Suspense>
    </div>
  );
}
