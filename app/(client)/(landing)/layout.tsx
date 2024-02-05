import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";

type LayoutType = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <Fragment>
      <header
        style={{ backdropFilter: "blur(5px)" }}
        className="sticky top-0 left-0 w-full z-[5] py-3 bg-black bg-opacity-50 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  width={150}
                  height={35}
                  src="/hotel-telly.png"
                  alt="Hotel Telly Logo"
                />
              </Link>
            </div>
            <div className="flex gap-10 items-center">
              <Link href="">
                <span className="text-white hover:underline font-light capitalize">
                  home
                </span>
              </Link>
              <Link href="">
                <span className="text-white hover:underline font-light capitalize">
                  about us
                </span>
              </Link>
              <Link href="">
                <span className="text-white hover:underline font-light capitalize">
                  rooms
                </span>
              </Link>
              <Link href="">
                <span className="text-white hover:underline font-light capitalize">
                  services
                </span>
              </Link>
              <Link href="">
                <span className="text-white hover:underline font-light capitalize">
                  contact
                </span>
              </Link>
            </div>
            <div>
              <Link href="">
                <span className="text-white font-light capitalize px-5 py-2 rounded-full border">book now</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="min-h-screen bg-black bg-opacity-50 py-40">
        <div className="container">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <div className="space-y-7">
                <div className="uppercase font-light text-white tracking-widest">
                  best hotel with cozy rooms
                </div>
                <div className="text-white text-5xl font-semibold capitalize leading-[1.3]">
                  just experience a new level of luxury
                </div>
                <div className="text-white font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum unde excepturi facere. A atque voluptatum accusantium nostrum dignissimos. Odio temporibus facere, laborum beatae aut rerum quibusdam repellendus, veniam, dignissimos fugit eveniet nemo nobis assumenda non. Unde odio optio tempora.
                </div>
                <div className="pt-10">
                  <Link href="" className="m-0 block">
                    <span className="text-white capitalize px-7 py-3 rounded-full border-2">explore rooms</span>
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