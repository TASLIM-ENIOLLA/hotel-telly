import { ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";

export const formFields = [
  {
    name: "fullName",
    title: "Write your full name",
    Component({ name, title, value, onChange }: ControllerRenderProps & {
      name: string;
      title: string;
    }) {
      return (
        <Input
          name={name}
          value={value}
          placeholder={title}
          onChange={(event) => onChange(event.target.value)}

          type="text"
          className="p-3 h-auto w-full bg-white shadow-none rounded-lg rounded-b-none text-base!"
        />
      );
    },
  },
  {
    name: "email",
    title: "Write your email address",
    Component({ name, title, value, onChange }: ControllerRenderProps & {
      name: string;
      title: string;
    }) {
      return (
        <Input
          name={name}
          value={value}
          placeholder={title}
          onChange={(event) => onChange(event.target.value)}

          type="email"
          className="p-3 h-auto w-full bg-white shadow-none rounded-lg rounded-b-none text-base!"
        />
      );
    },
  },
  {
    name: "message",
    title: "Write your message",
    Component({ name, title, value, onChange }: ControllerRenderProps & {
      name: string;
      title: string;
    }) {
      return (
        <Textarea
          name={name}
          value={value}
          placeholder={title}
          onChange={onChange}

          className="p-3 h-60 w-full bg-white shadow-none resize-none rounded-lg rounded-b-none text-base!"
        />
      );
    },
  },
];