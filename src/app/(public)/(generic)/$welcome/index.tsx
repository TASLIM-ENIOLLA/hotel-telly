import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

export function Welcome() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 ring-0 mx-auto max-w-5xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3 text-center">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                welcome to hotel telly
              </span>
            </CardTitle>
            <CardDescription className="text-xl leading-9 font-light first-letter:uppercase">
              <span className="text-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ab molestias doloremque ex, excepturi voluptatem natus quae? Sequi harum praesentium suscipit a porro tempore, magni tenetur temporibus illo quibusdam quo? Optio et reprehenderit veritatis laboriosam eligendi explicabo aut nulla?
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 text-center">
            <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-medium rounded-full h-auto! bg-transparent!">
              <Link href="/about">
                <span className="text-foreground capitalize">
                  about us
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