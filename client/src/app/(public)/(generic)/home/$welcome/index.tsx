import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Welcome(props: PageResponse["data"]["welcomeSection"]) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 ring-0 mx-auto max-w-5xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3 text-center">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                {props.title}
              </span>
            </CardTitle>
            <CardDescription className="text-xl leading-9 font-light first-letter:uppercase">
              <span className="text-foreground">
                {props.description}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 text-center">
            <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-medium rounded-full h-auto! bg-transparent!">
              <Link href={props.cta.href}>
                <span className="text-foreground capitalize">
                  {props.cta.text}
                </span>
                <ArrowRight className="text-foreground" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}