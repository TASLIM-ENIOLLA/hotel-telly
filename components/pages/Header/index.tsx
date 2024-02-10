import Link from "next/link";
import Image from "next/image";

import { routes, type Route } from "./props/routes";

export default function Page() {
  return (
    <header
      style={{ backdropFilter: "blur(5px)" }}
      className="sticky top-0 left-0 w-full z-[5] py-3 bg-black bg-opacity-50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                width={140}
                height={30}
                src="/hotel-telly.png"
                alt="Hotel Telly Logo"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <details className="relative">
              <summary className="inline-block">
                <button className="pointer-events-none">
                  <span className="bi-grid-fill text-xl text-white"></span>
                </button>
              </summary>
              <div
                className="p-5 absolute top-[110%] w-[80vw] right-0 bg-white bg-opacity-[.95] shadow-lg rounded-lg max-w-[300px]">
                <div className="divide-y divide-[#555555] space-y-2">
                  {routes.map(({name, href}: Route, index: number) => (
                    <div key={index} className="pt-2">
                      <Link href={href}>
                        <span className="text-black text-sm md:text-base hover:underline font-light capitalize">
                          {name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="pt-5">
                  <Link href="/booking" className="block">
                    <span className="text-white bg-black text-center text-sm md:text-base block w-full font-light capitalize px-5 py-2 rounded-full border border-[#555555]">book now</span>
                  </Link>
                </div>
              </div>
            </details>
          </div>
          <div className="hidden lg:flex gap-10 items-center">
            {routes.map(({name, href}: Route, index: number) => (
              <Link href={href} key={index}>
                <span className="text-white hover:underline font-light capitalize">
                  {name}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link href="/booking">
              <span className="text-white font-light capitalize px-5 py-2 rounded-full border">book now</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}