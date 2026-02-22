import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { offers } from "./props";

export function Offers() {
  return (
    <section className="@container/flex">
      <div className="flex flex-col @7xl/flex:flex-row">
        <div className="flex-1">
          <div className="h-full min-h-200 relative">
            <Image fill
              alt="contact banner"
              src="/dining-area.png"
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
                        what activities we offer
                      </span>
                    </CardTitle>
                    <CardDescription className="text-lg font-light first-letter:uppercase">
                      <span className="text-foreground">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam iusto, libero recusandae quisquam nostrum sint, et, repudiandae distinctio est aliquam enim facere ab incidunt ipsa?
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="flex gap-y-10 gap-x-15 flex-wrap">
                      {offers.map(({ title, Icon }, index) => (
                        <Fragment key={index}>
                          <div className="flex-none">
                            <Button asChild size={null} variant="ghost" className="text-base font-semibold">
                              <div className="gap-5">
                                <Icon className="size-12" />
                                <span className="capitalize">
                                  {title}
                                </span>
                              </div>
                            </Button>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </CardContent>
                  <CardContent className="px-0">
                    <Button asChild variant="outline" className="py-4 px-10 gap-3 text-base font-medium rounded-full h-auto! bg-transparent!">
                      <Link href="/services">
                        <span className="text-foreground capitalize">
                          view all offers
                        </span>
                        <ArrowRight className="text-foreground" />
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