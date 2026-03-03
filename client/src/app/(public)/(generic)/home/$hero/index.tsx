"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { getAbsoluteURL } from "@/lib/axios";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Hero(props: PageResponse["data"]["heroSection"]) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col justify-center min-h-[calc(100svh-15rem)]">
          <div className="flex-none">
            <Card className="p-0 mx-auto max-w-5xl ring-0 shadow-none rounded-none overflow-visible bg-transparent">
              <CardHeader className="px-0">
                <CardDescription className="text-lg font-medium tracking-widest">
                  <span className="text-white uppercase">
                    {props.intro}
                  </span>
                </CardDescription>
                <CardTitle className="text-6xl xl:text-8xl leading-snug font-normal font-secondary">
                  <span className="text-white capitalize">
                    {props.heading}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-5">
                <p className="text-xl font-light leading-8">
                  <span className="text-white text-shadow-lg">
                    {props.description}
                  </span>
                </p>
                <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-semibold rounded-full h-auto! bg-transparent!">
                  <Link href={props.cta.href}>
                    <span className="text-white capitalize">
                      {props.cta.text}
                    </span>
                    <ArrowRight className="text-white" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {(() => {
        if (props.image.url) {
          return (
            <style jsx global>{`
              body {
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${getAbsoluteURL(props.image.url)});
              }
            `}</style>
          );
        }

        return;
      })()}
    </section>
  );
}