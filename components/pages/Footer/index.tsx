import Link from "next/link";
import { quickLinks, type QuickLink } from "./props/quick-links";

export default function Page() {
  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="container">
        <div className="space-y-10">
          <div className="grid grid-cols-12 space-y-10 md:space-y-0 md:gap-10">
            <div className="col-span-12 md:col-span-12 lg:col-span-4">
              <div className="space-y-5">
                <div className="text-lg md:text-xl font-semibold capitalize">about us</div>
                <div className="text-sm md:text-base text-slate-600">
                  Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="space-y-5">
                <div className="text-lg md:text-xl font-semibold capitalize">quick links</div>
                <div className="space-y-2">
                  {quickLinks.map(({name, href}: QuickLink, index: number) => (
                    <div key={index}>
                      <Link href={href}>
                        <span className="capitalize text-sm md:text-base text-slate-600 hover:underline">
                          {name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="space-y-5">
                <div className="text-lg md:text-xl font-semibold capitalize">contact</div>
                <div className="space-y-2">
                  <div>
                    <address className="text-sm md:text-base text-slate-600">
                      Tea Berry, Marinette, USA.
                    </address>
                  </div>
                  <div>
                    <Link href="tel://+31 939 777">
                      <span className="text-sm md:text-base hover:underline text-slate-600">
                        +31 939 777
                      </span>
                    </Link>
                    &#44;&nbsp;
                    <Link href="tel://+31 454 6233">
                      <span className="text-sm md:text-base hover:underline text-slate-600">
                        +31 454 6233
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="mailto://info@myhotelwebsite.com">
                      <span className="text-sm md:text-base hover:underline text-slate-600">
                        info@myhotelwebsite.com
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-4">
              <div className="space-y-5">
                <div className="text-lg md:text-xl font-semibold capitalize">get social</div>
                <div className="text-sm md:text-base text-slate-600">
                  Everyone has the right to freedom of thought, conscience and religion.
                </div>
                <div className="flex gap-5 flex-wrap">
                  <Link href="" className="text-sm md:text-base text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                    <span className="bi-facebook text-xl"></span>
                  </Link>
                  <Link href="" className="text-sm md:text-base text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                    <span className="bi-instagram text-xl"></span>
                  </Link>
                  <Link href="" className="text-sm md:text-base text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                    <span className="bi-twitter text-xl"></span>
                  </Link>
                  <Link href="" className="text-sm md:text-base text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                    <span className="bi-linkedin text-xl"></span>
                  </Link>
                  <Link href="" className="text-sm md:text-base text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                    <span className="bi-youtube text-xl"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="text-sm md:text-base text-slate-600">
              &copy; {new Date().getFullYear()} Copyright Taslim Eniolla. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}