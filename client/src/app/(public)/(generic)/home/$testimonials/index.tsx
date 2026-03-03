import { Quote } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { CarouselPrevious } from "@/components/shadcn/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/shadcn/ui/card";
import { Carousel, CarouselContent } from "@/components/shadcn/ui/carousel";
import { CarouselItem, CarouselNext } from "@/components/shadcn/ui/carousel";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Testimonials(props: PageResponse["data"]["testimonialsSection"]) {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <Carousel opts={{ loop: true }} className="space-y-10">
          <CarouselContent>
            {props.testimonials.map(({ id, title, description}) => (
              <Fragment key={id}>
                <CarouselItem className="w-full">
                  <Card className="p-0 gap-5 ring-0 mx-auto max-w-3xl shadow-none rounded-none overflow-visible bg-transparent">
                    <CardContent className="px-0">
                      <p className="text-4xl text-center first-letter:uppsercase">
                        <span className="font-tertiary text-foreground">
                          <Quote className="scale-x-[-1] inline align-top mx-3 stroke-0 fill-muted-foreground" />
                          {description}
                          <Quote className="inline align-top mx-3 stroke-0 fill-muted-foreground" />
                        </span>
                      </p>
                    </CardContent>
                    <CardFooter className="px-0">
                      <p className="mx-auto text-base font-normal">
                        <span className="uppercase text-muted-foreground">
                          &mdash; {title}
                        </span>
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </Fragment>
            ))}
          </CarouselContent>
          <div className="relative">
            <div className="flex gap-5 justify-center">
              <CarouselPrevious className="static size-15 [&_svg]:size-6!" />
              <CarouselNext className="static size-15 [&_svg]:size-6!" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
