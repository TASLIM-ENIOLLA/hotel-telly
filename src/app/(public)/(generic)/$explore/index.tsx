import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { CardTitle, CardHeader } from "@/components/shadcn/ui/card";
import { Card, CardContent, CardFooter } from "@/components/shadcn/ui/card";
import { CarouselContent, CarouselPrevious } from "@/components/shadcn/ui/carousel";
import { Carousel, CarouselItem, CarouselNext } from "@/components/shadcn/ui/carousel";

import { rooms } from "./props";

export function Explore() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 gap-10 ring-0 mx-auto max-w-6xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-0">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                explore our rooms
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Carousel opts={{ loop: true }} className="space-y-10">
              <CarouselContent>
                {rooms.map(({ name, image }, index) => (
                  <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 min-w-sm">
                    <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                      <CardContent className="px-0">
                        <div className="h-96 relative">
                          <Image fill
                            alt={name}
                            src={image}
                            className="rounded-xl"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="px-0">
                        <p className="text-xl font-normal">
                          <span className="capitalize">{name}</span>
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
                <Link href="/rooms">
                  <span className="text-foreground capitalize">
                    view all rooms
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