import "@/styles/globals.css";

import type { Metadata } from "next";

import Link from "next/link";

type RootPropsType = {
  children: React.ReactNode
}

export default function Root({ children }: RootPropsType) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="bg-gray-100 pt-20 pb-10">
          <div className="container">
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="col-span-1 md:col-span-4">
                  <div className="space-y-5">
                    <div className="text-xl font-semibold capitalize">about us</div>
                    <div className="text-slate-600">
                      Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief.
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="space-y-5">
                    <div className="text-xl font-semibold capitalize">quick links</div>
                    <div className="space-y-2">
                      {["Bookings", "Rooms", "Services", "Contact", "Location"].map((link: string, index: number) => (
                        <div key={index}>
                          <Link href="">
                            <span className="capitalize text-slate-600 hover:underline">
                              {link}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="space-y-5">
                    <div className="text-xl font-semibold capitalize">contact</div>
                    <div className="space-y-2">
                      <div>
                        <address className="text-slate-600">
                          Tea Berry, Marinette, USA.
                        </address>
                      </div>
                      <div>
                        <Link href="tel://+31 939 777">
                          <span className="hover:underline text-slate-600">
                            +31 939 777
                          </span>
                        </Link>
                        &#44;&nbsp;
                        <Link href="tel://+31 454 6233">
                          <span className="hover:underline text-slate-600">
                            +31 454 6233
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link href="mailto://info@myhotelwebsite.com">
                          <span className="hover:underline text-slate-600">
                            info@myhotelwebsite.com
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-4">
                  <div className="space-y-5">
                    <div className="text-xl font-semibold capitalize">get social</div>
                    <div className="text-slate-600">
                      Everyone has the right to freedom of thought, conscience and religion.
                    </div>
                    <div className="flex gap-5 flex-wrap">
                      <Link href="" className="text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                        <span className="bi-facebook text-xl"></span>
                      </Link>
                      <Link href="" className="text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                        <span className="bi-instagram text-xl"></span>
                      </Link>
                      <Link href="" className="text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                        <span className="bi-twitter text-xl"></span>
                      </Link>
                      <Link href="" className="text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                        <span className="bi-linkedin text-xl"></span>
                      </Link>
                      <Link href="" className="text-slate-600 hover:bg-slate-900 hover:text-white transition duration-750 linear px-3 py-2 border rounded-sm">
                        <span className="bi-youtube text-xl"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-wrap gap-10 justify-between items-center">
                <div className="text-slate-600">
                  &copy; {new Date().getFullYear()} Copyright Taslim Eniolla. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="popups"></div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Hotel Websites",
  description: "Generated by create next app",
}