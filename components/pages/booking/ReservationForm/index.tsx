"use client";

import { useRouter } from "next/navigation";
import { parseObject } from "@/lib/form-data";
import { setDate, getMinDate, dateDiff } from "./utils";
import { useState, useEffect, useMemo } from "react";

import { show } from "@/components/ui/Alert";

import Input from "@/components/pages/contact/Input";
import Select from "@/components/pages/contact/Select";
import Textarea from "@/components/pages/contact/Textarea";

type ComponentProps = {
  roomTypes: { option: string, value: string }[]
}

export default function Component({ roomTypes }: ComponentProps) {
  const router = useRouter();

  const [timeCounter, setTimecounter] = useState <number> (0);
  const [formData, setFormData] = useState <Record<string, string>> ({});

  const checkInMinDate: string = useMemo(() => {
    const { checkInDate } = formData;

    if(checkInDate) {
      return setDate(checkInDate, 0);
    }

    return getMinDate();
  }, [timeCounter, formData?.checkInDate]);
  
  const checkOutMinDate: string = useMemo(() => {
    const { checkInDate, checkOutDate } = formData;

    if(checkInDate) {
      return setDate(checkInDate, 1);
    }

    return getMinDate(1);
  }, [timeCounter, formData?.checkInDate]);

  function updateFormData(prop: string, value: string): void {
    if(formData[prop] !== value) {
      setFormData((formData) => ({
        ...formData,
        [prop]: value
      }));
    }
  }

  async function onFormSubmit(event: any): Promise<void> {
    event.preventDefault();

    const options: RequestInit = {
      method: "POST",
      cache: "no-cache",
      body: parseObject(formData)
    }

    try {
      const req = await fetch("/api/client/booking", options);
      const res = await req.json();

      show({
        theme: "green",
        duration: 3000,
        message: "Reservation made successfully"
      });
    }
    catch(error) {
      console.clear();
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimecounter((counter) => counter + 1), 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  useEffect((): void => {
    const { checkInDate } = formData;
    const checkOutDate = setDate(checkInDate, 1);
    
    updateFormData("checkOutDate", checkOutDate);
  }, [formData.checkInDate, formData.duration]);

  return (
    <form onSubmit={onFormSubmit} className="max-w-[500px] mx-auto pt-10">
      <div className="space-y-10">
        <fieldset className="border-t space-y-5">
          <legend className="capitalize text-sm md:text-base px-3 mx-auto">stay information</legend>
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Check-in date *</div>
              <Input
                type="date"
                min={checkInMinDate}
                className="form-input"
                value={checkInMinDate}
                onChange={(value) => updateFormData("checkInDate", value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Check-out date *</div>
              <Input
                type="date"
                min={checkOutMinDate}
                className="form-input"
                value={checkOutMinDate}
                onChange={(value) => updateFormData("checkOutDate", value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Room type *</div>
              <Select
                value=""
                options={roomTypes}
                className="form-input capitalize"
                onChange={(value) => updateFormData("roomType", value)}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="border-t space-y-5">
          <legend className="capitalize text-sm md:text-base px-3 mx-auto">personal information</legend>
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Full name *</div>
              <Input
                value=""
                type="text"
                className="form-input"
                onChange={(value) => updateFormData("fullName", value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Email address *</div>
              <Input
                value=""
                type="email"
                className="form-input"
                onChange={(value) => updateFormData("emailAddress", value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Phone number *</div>
              <Input
                value=""
                type="phone"
                className="form-input"
                onChange={(value) => updateFormData("phoneNumber", value)}
              />
            </div>
            <div className="space-y-1">
              <div className="text-sm md:text-base font-light">Comment</div>
              <Textarea
                value=""
                className="form-input"
                onChange={(value) => updateFormData("comment", value)}
              />
            </div>
          </div>
        </fieldset>
        <div>
          <input
            type="submit"
            value="make reservation"
            className="text-sm md:text-base cursor-pointer form-input capitalize font-semibold block w-full shadow-lg p-3 rounded-md bg-black text-white"
          />
        </div>
      </div>
    </form>
  );
}