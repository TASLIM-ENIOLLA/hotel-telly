"use client";

import { Fragment } from "react/jsx-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldErrors } from "react-hook-form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/shadcn/ui/button";

import { formFields } from "./props";
import { FormSchema } from "./types";
import { formSchema } from "./schema";

export function Form() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      fullName: "",
    }
  });

  function onFormSubmit(data: FormSchema) {
    console.log(data);
  }

  function onFormError(errors: FieldErrors<FormSchema>) {
    Object.values(errors).forEach((error) => {
      console.log(error.message);
    });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="space-y-3">
        {formFields.map(({ Component, ...props }, index) => (
          <Fragment key={index}>
            <Controller
              name={props.name as keyof FormSchema}
              control={form.control}
              render={({ field }) => {
                return (
                  <Component {...props} {...field} />
                );
              }}
            />
          </Fragment>
        ))}
        <Button type="submit" variant="default" className="py-3 px-10 h-auto text-lg rounded-xl rounded-t-none">
          <span className="capitalize">send message</span>
        </Button>
      </form>
    </FormProvider>
  );
}