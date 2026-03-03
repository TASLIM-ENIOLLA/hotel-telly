import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

import { Form } from "./components";

export function Newsletter(props: PageResponse["data"]["newsletterSection"]) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <Card className="p-0 gap-10 ring-0 mx-auto max-w-3xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3 text-center">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                {props.title}
              </span>
            </CardTitle>
            <CardDescription className="text-lg font-light first-letter:uppercase">
              <span className="text-foreground">
                {props.description}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Form />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}