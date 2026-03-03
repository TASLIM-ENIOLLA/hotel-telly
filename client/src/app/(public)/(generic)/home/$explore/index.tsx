import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { getAbsoluteURL } from "@/lib/axios";

import { Button } from "@/components/shadcn/ui/button";
import { CardTitle, CardHeader } from "@/components/shadcn/ui/card";
import { Card, CardContent, CardFooter } from "@/components/shadcn/ui/card";
import { CarouselContent, CarouselPrevious } from "@/components/shadcn/ui/carousel";
import { Carousel, CarouselItem, CarouselNext } from "@/components/shadcn/ui/carousel";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Explore(props: PageResponse["data"]["roomsSection"]) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 gap-10 ring-0 mx-auto max-w-6xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-0">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                {props.title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Carousel opts={{ loop: true }} className="space-y-10">
              <CarouselContent>
                {props.roomCards.map(({ id, title, image }) => (
                  <CarouselItem key={id} className="basis-1/2 lg:basis-1/3 min-w-sm">
                    <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                      <CardContent className="px-0">
                        <div className="h-96 relative">
                          <Image fill unoptimized
                            alt={title}
                            src={getAbsoluteURL(image.url)}
                            className="rounded-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="px-0">
                        <p className="text-xl font-normal">
                          <span className="capitalize">{title}</span>
                        </p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="relative">
                <div className="flex gap-5 justify-end">
                  <CarouselPrevious className="static size-15 [&_svg]:size-6!" />
                  <CarouselNext className="static size-15 [&_svg]:size-6!" />
                </div>
              </div>
            </Carousel>
            <div className="text-center">
              <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-medium rounded-full h-auto! bg-transparent!">
                <Link href={props.cta.href}>
                  <span className="text-foreground capitalize">
                    {props.cta.text}
                  </span>
                  <ArrowRight className="text-foreground" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}