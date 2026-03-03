"use server";

import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardFooter } from "@/components/shadcn/ui/card";
import { CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { getRoomCategories } from "./actions";

export default async function Page() {
  const roomCategories = await getRoomCategories();

  console.log({ roomCategories });

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 gap-10 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-0">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                our rooms
              </span>
            </CardTitle>
            <CardDescription className="text-xl font-light first-letter:uppercase">
              <span className="text-foreground">
                discover our exquisite collection of rooms, each thoughtfully designed to provide comfort, elegance, and an unforgettable stay
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="@container/grid">
              <div className="grid gap-10 grid-cols-12">
                {Array(5).fill(null).map((_, index) => {
                  const props = {
                    price: "$229/night",
                    size: "10ft",
                    capacity: "max 2 persons",
                    bed: "normal beds",
                    services: [
                      "wi-fi",
                      "television",
                      "bathroom",
                    ],
                  }

                  return (
                    <Fragment key={index}>
                      <div className="col-span-12 @2xl/grid:col-span-6 @5xl/grid:col-span-4 @7xl/grid:col-span-3">
                        <Card className="py-0 gap-5 ring-0 group shadow-none transition-all">
                          <CardHeader className="px-0 h-72 gap-0 relative rounded-lg overflow-hidden group-hover:scale-lg">
                            <Image fill
                              alt="Room type"
                              src="/dining-area.png"
                              style={{
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                            />
                          </CardHeader>
                          <CardHeader className="px-0 gap-0">
                            <CardTitle className="text-2xl font-light font-secondary">
                              <span className="capitalize">classic rooms</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="px-0">
                            <table className="w-full text-lg">
                              <tbody className="[&>tr]:h-8">
                                {Object.entries(props).map(([key, value], index) => (
                                  <Fragment key={index}>
                                    <tr className="[&>th]:text-left">
                                      <th className="capitalize">{key}</th>
                                      <td className="capitalize">
                                        {typeof value === "string" ? value : value.join(", ")}
                                      </td>
                                    </tr>
                                  </Fragment>
                                ))}
                              </tbody>
                            </table>
                          </CardContent>
                          <CardFooter className="px-0">
                            <Button asChild size="lg" variant="default" className="px-5 h-12 text-base font-medium rounded-full">
                              <Link href="#">
                                <span className="capitalize">more details</span>
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
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