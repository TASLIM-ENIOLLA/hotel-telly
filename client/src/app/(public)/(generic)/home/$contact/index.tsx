import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import type { PageResponse } from "@/app/(public)/(generic)/home/types";

import { Form } from "./components";

export function Contact(props: PageResponse["data"]["contactSection"]) {
  return (
    <section className="@container/flex">
      <div className="flex flex-col @7xl/flex:flex-row">
        <div className="flex-1 bg-muted">
          <div className="flex h-full flex-col justify-center">
            <div className="py-20">
              <div className="container">
                <Card className="p-0 gap-10 ring-0 mx-auto max-w-3xl shadow-none rounded-none overflow-visible bg-transparent">
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
                    <div className="flex gap-5 flex-col items-start">
                      {props.contacts.map(({ id, title, link }) => (
                        <Fragment key={id}>
                          <Button asChild size={null} variant="link" className="text-lg font-normal text-foreground whitespace-normal">
                            <Link prefetch={false} target="_blank" href={link.href}>
                              <strong className="capitalize">{title}:</strong>&nbsp;
                              {link.text}
                            </Link>
                          </Button>
                        </Fragment>
                      ))}
                    </div>
                  </CardContent>
                  <CardContent className="px-0">
                    <Form />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full min-h-200 relative">
            <Image fill
              alt="contact banner"
              src="/contact-banner.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}