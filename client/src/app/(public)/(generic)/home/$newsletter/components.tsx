"use client";

import { toast } from "sonner";
import { Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldErrors, useForm } from "react-hook-form";

import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/shadcn/ui/field";

import { useSubscriber } from "@/api/newsletter/hooks";

import { FormSchema } from "./types";
import { formSchema } from "./schema";

export function Form() {
  const subscriber = useSubscriber();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    },
  });

  function onFormSubmit(payload: FormSchema) {
    subscriber.mutate({ data: payload });
  }

  function onFormError(errors: FieldErrors<FormSchema>) {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field orientation="vertical">
              <FieldLabel className="group ring-input outline-muted-foreground/50 transition-all focus-within:ring-4 focus-within:outline *:data-[slot=field]:p-2 has-[>[data-slot=field]]:p-0 has-[>[data-slot=field]]:rounded-full">
                <Field orientation="horizontal">
                  <Input
                    {...field }
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 border-none shadow-none font-normal rounded-full ring-0! text-base!"
                  />
                  <Button disabled={subscriber.isPending} type="submit" className="px-10 h-12 text-base rounded-full">
                    {subscriber.isPending && <Loader className="animated animate-spin" />}
                    <span className="capitalize">
                      sign up
                    </span>
                  </Button>
                </Field>
              </FieldLabel>
              {fieldState.invalid && (
                <FieldError className="text-center" errors={[fieldState.error]} />
              )}
            </Field>
          );
        }}
      />
    </form>
  );
}