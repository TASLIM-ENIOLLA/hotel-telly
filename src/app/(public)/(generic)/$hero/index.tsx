import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

export function Hero() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col justify-center min-h-[calc(100svh-15rem)]">
          <div className="flex-none">
            <Card className="p-0 mx-auto max-w-5xl ring-0 shadow-none rounded-none overflow-visible bg-transparent">
              <CardHeader className="px-0">
                <CardDescription className="text-lg font-medium tracking-widest">
                  <span className="text-white uppercase">
                    best hotel with cozy room
                  </span>
                </CardDescription>
                <CardTitle className="text-6xl xl:text-8xl leading-snug font-normal font-secondary">
                  <span className="text-white capitalize">
                    just experience a new level of luxury.
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-5">
                <p className="text-xl font-light leading-8">
                  <span className="text-white text-shadow-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident minus necessitatibus reiciendis, eligendi quod debitis molestiae quibusdam fugit excepturi? Dolor ab vel aut veniam sit autem officiis eos esse id accusantium natus in provident maiores recusandae facilis expedita optio ex, doloremque nobis vero dignissimos. Eum minus eius ipsa dolorum!
                  </span>
                </p>
                <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-semibold rounded-full h-auto! bg-transparent!">
                  <Link href="/book-now">
                    <span className="text-white capitalize">
                      book now
                    </span>
                    <ArrowRight className="text-white" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}