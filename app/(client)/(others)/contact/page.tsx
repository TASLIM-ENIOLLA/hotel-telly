"use client";

import Input from "@/components/pages/contact/Input";
import Textarea from "@/components/pages/contact/Textarea";

export default function Page() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold capitalize">
              contact us
            </div>
            <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
              Leave us a message, we&apos;ll certainly reply
            </div>
          </div>
        </div>
        <form className="max-w-[500px] mx-auto pt-10">
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Subject *</div>
              <Input
                type="text"
                value=""
                className="form-input"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Full name *</div>
              <Input
                type="text"
                value=""
                className="form-input"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Email address *</div>
              <Input
                type="email"
                value=""
                className="form-input"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Message *</div>
              <Textarea
                value=""
                className="form-input"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div className="pt-5">
              <input
                type="submit"
                value="Send message"
                className="text-sm md:text-base cursor-pointer form-input capitalize font-semibold block w-full shadow-lg p-3 rounded-md bg-black text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}