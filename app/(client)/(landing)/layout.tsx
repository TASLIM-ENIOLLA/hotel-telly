"use client";

import { Fragment } from "react";

import Link from "next/link";

import Header from "@/components/pages/Header";

type LayoutType = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <Fragment>
      <Header />
      <section className="md:min-h-screen bg-black bg-opacity-50 py-20 md:py-40">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <div className="space-y-5 md:space-y-7">
                <div className="uppercase text-sm md:text-base font-light text-white tracking-widest">
                  best hotel with cozy rooms
                </div>
                <div className="text-white text-3xl md:text-5xl font-semibold capitalize leading-[1.3]">
                  just experience a new level of luxury
                </div>
                <div className="text-white text-sm md:text-base font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum unde excepturi facere. A atque voluptatum accusantium nostrum dignissimos. Odio temporibus facere, laborum beatae aut rerum quibusdam repellendus, veniam, dignissimos fugit eveniet nemo nobis assumenda non. Unde odio optio tempora.
                </div>
                <div className="pt-10">
                  <Link href="" className="m-0 block">
                    <span className="text-white text-sm md:text-base capitalize px-7 py-3 rounded-full border-2">explore rooms</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {children}
    </Fragment>
  );
}