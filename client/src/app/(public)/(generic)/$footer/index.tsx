import Link from "next/link";

import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";
import { CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Card, CardContent, CardDescription } from "@/components/shadcn/ui/card";

export function Footer() {
  return (
    <footer className="py-20 bg-muted">
      <div className="container">
        <div className="@container/grid">
          <div className="grid gap-10 grid-cols-6">
            <div className="col-span-12 @7xl/grid:col-span-2">
              <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                <CardHeader className="px-0 gap-3">
                  <CardTitle className="text-4xl font-secondary">
                    <span className="capitalize">
                      about us
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-lg font-light first-letter:uppercase">
                    <span className="text-foreground">
                      Ultrices interdum viverra pharetra, tellus. Sapien eu diam ipsum volutpat, amet fringi verra pharetrailla.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12 @7xl/grid:col-span-1">
              <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                <CardHeader className="px-0 gap-3">
                  <CardTitle className="text-4xl font-secondary">
                    <span className="capitalize">
                      quick links
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex gap-3 flex-col items-start">
                    {["booking", "rooms", "services", "contact", "location"].map((name, index) => (
                      <Fragment key={index}>
                        <Button asChild size={null} variant="link" className="text-lg font-normal whitespace-normal">
                          <Link prefetch={false} target="_blank" href="#" className="capitalize">
                            {name}
                          </Link>
                        </Button>
                      </Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12 @7xl/grid:col-span-1">
              <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                <CardHeader className="px-0 gap-3">
                  <CardTitle className="text-4xl font-secondary">
                    <span className="capitalize">
                      contact
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex gap-3 flex-col items-start">
                    {["tea berry, marinette USA", "+32 939 777 4546233", "info@templatesjungle.com"].map((name, index) => (
                      <Fragment key={index}>
                        <Button asChild size={null} variant="link" className="text-lg font-normal whitespace-normal">
                          <Link prefetch={false} target="_blank" href="#" className="capitalize">
                            {name}
                          </Link>
                        </Button>
                      </Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12 @7xl/grid:col-span-2">
              <Card className="p-0 gap-3 ring-0 shadow-none rounded-none overflow-visible bg-transparent">
                <CardHeader className="px-0 gap-3">
                  <CardTitle className="text-4xl font-secondary">
                    <span className="capitalize">
                      get social
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg font-light first-letter:uppercase">
                    <span className="text-foreground">
                      Follow us on social platforms and keep in touch with Templates Jungle.
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}