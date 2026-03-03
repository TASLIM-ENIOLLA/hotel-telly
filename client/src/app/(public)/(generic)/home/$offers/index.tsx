import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { getAbsoluteURL } from "@/lib/axios";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Offers(props: PageResponse["data"]["offersSection"]) {
  return (
    <section className="@container/flex">
      <div className="flex flex-col @7xl/flex:flex-row">
        <div className="flex-1">
          <div className="h-full min-h-200 relative">
            <Image fill unoptimized
              alt={props.image.documentId}
              src={getAbsoluteURL(props.image.url)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div className="flex-1 bg-muted">
          <div className="flex h-full flex-col justify-center">
            <div className="py-20">
              <div className="container">
                <Card className="p-0 ring-0 mx-auto max-w-3xl shadow-none rounded-none overflow-visible bg-transparent">
                  <CardHeader className="px-0 gap-3">
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
                    <div className="flex gap-y-10 gap-x-15 flex-wrap">
                      {props.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <Button asChild variant="ghost" className="gap-5 h-auto text-lg">
                            <div>
                              <Image
                                width="10"
                                height="10"
                                className="w-10 h-10"
                                alt={offer.text}
                                src={getAbsoluteURL(offer.svg.url)}
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                              <span className="capitalize">
                                {offer.text}
                              </span>
                            </div>
                          </Button>
                        </Fragment>
                      ))}
                    </div>
                  </CardContent>
                  <CardContent className="px-0">
                    <Button asChild variant="default" className="py-4 px-10 gap-3 text-base font-medium rounded-full h-auto!">
                      <Link href={props.cta.href}>
                        <span className="capitalize">
                          {props.cta.text}
                        </span>
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}