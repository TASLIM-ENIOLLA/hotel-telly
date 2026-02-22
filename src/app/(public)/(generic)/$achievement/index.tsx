import { Fragment } from "react/jsx-runtime";

import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { Counter } from "./components";
import { achievements } from "./props";

export function Achievements() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <Card className="p-0 gap-20 ring-0 mx-auto max-w-6xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                our achievements
              </span>
            </CardTitle>
            <CardDescription className="text-xl font-light first-letter:uppercase">
              <span className="text-foreground">
                we are the top leading hotel with 22 years of experience
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="@container/grid">
              <div className="grid gap-10 grid-cols-12">
                {achievements.map(({ value, suffix, subtitle }, index) => (
                  <Fragment key={index}>
                    <div className="col-span-6 @4xl/grid:col-span-4 @6xl/grid:col-span-3">
                      <Counter value={value} duration={1000} suffix={suffix} />
                      <p className="text-lg font-normal">
                        <span className="uppercase text-muted-foreground">
                          {subtitle}
                        </span>
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}