"use client";

import numeral from "numeral";

import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { Fragment } from "react/jsx-runtime";
import { useInView } from "react-intersection-observer";

import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Achievements(props: PageResponse["data"]["achievementsSections"]) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 gap-20 ring-0 mx-auto max-w-6xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                {props.title}
              </span>
            </CardTitle>
            <CardDescription className="text-xl font-light first-letter:uppercase">
              <span className="text-foreground">
                {props.description}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="@container/grid">
              <div className="grid gap-10 grid-cols-12">
                {props.achievements.map(({ title, description }, index) => {
                  const countUpRef = useRef<HTMLSpanElement | null>(null);
                  const observer = useInView({
                    threshold: 1,
                    triggerOnce: false,
                  });

                  const countUp = useCountUp({
                    duration: 1.5,
                    ref: countUpRef,
                    end: parseInt(title),
                    formattingFn(n) {
                      return numeral(n).format("0a");
                    },
                  });

                  useEffect(() => {
                    if (observer.inView) {
                      countUp.start();
                    }
                    else {
                      countUp.reset();
                    }
                  }, []);

                  return (
                    <Fragment key={index}>
                      <div ref={observer.ref} className="col-span-6 @4xl/grid:col-span-4 @6xl/grid:col-span-3">
                        <h2 className="text-8xl font-extrabold font-secondary">
                          <span ref={countUpRef} className="text-foreground" />
                        </h2>
                        <p className="text-lg font-normal">
                          <span className="uppercase text-muted-foreground">
                            {description}
                          </span>
                        </p>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}