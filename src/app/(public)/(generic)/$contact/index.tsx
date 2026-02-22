import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { Form } from "./components";

export function Contact() {
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
                        get in touch
                      </span>
                    </CardTitle>
                    <CardDescription className="text-lg font-light first-letter:uppercase">
                      <span className="text-foreground">
                        Ante sed dictum nisi suscipit ac ut faucibus pretium. Ultrices interdum viverra pharetra, tellus. Sapien eu diam ipsum volutpat, amet fringilla.
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="flex gap-5 flex-col items-start">
                      <Button asChild size={null} variant="link" className="text-lg font-normal text-foreground whitespace-normal">
                        <Link prefetch={false} target="_blank" href="#">
                          <strong>Address:</strong>&nbsp;
                          Tea Berry, Marinette, USA
                        </Link>
                      </Button>
                      <Button asChild size={null} variant="link" className="text-lg font-normal text-foreground whitespace-normal">
                        <Link prefetch={false} target="_blank" href="tel:+319397774546233">
                          <strong>Phone:</strong>&nbsp;
                          +31 939 777 4546233
                        </Link>
                      </Button>
                      <Button asChild size={null} variant="link" className="text-lg font-normal text-foreground whitespace-normal">
                        <Link prefetch={false} target="_blank" href="mailto:info@templatesjungle.com">
                          <strong>Email:</strong>&nbsp;
                          info@templatesjungle.com
                        </Link>
                      </Button>
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