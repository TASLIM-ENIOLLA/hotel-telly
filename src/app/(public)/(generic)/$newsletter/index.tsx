import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";
import { Field, FieldContent, FieldLabel } from "@/components/shadcn/ui/field";

export function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <Card className="p-0 gap-10 ring-0 mx-auto max-w-3xl shadow-none rounded-none overflow-visible bg-transparent">
          <CardHeader className="px-0 gap-3 text-center">
            <CardTitle className="text-4xl font-secondary">
              <span className="capitalize">
                join our newsletter
              </span>
            </CardTitle>
            <CardDescription className="text-lg font-light first-letter:uppercase">
              <span className="text-foreground">
                Sign up to our newsletter to receive the latest news about offers &amp; promotions.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <form>
              <FieldLabel className="*:data-[slot=field]:p-0 border-0! rounded-full!">
                <Field orientation="horizontal" className="has-[>[data-slot=field-content]]:items-center">
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="px-5 h-14 rounded-full font-secondary rounded-r-none text-lg!"
                    />
                  </FieldContent>
                  <Button type="submit" className="px-10 h-14 text-lg rounded-full rounded-l-none">
                    <span className="capitalize">
                      sign up
                    </span>
                  </Button>
                </Field>
              </FieldLabel>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}