import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/pages/Counter";

export default function Page() {
  
  return (
    <Fragment>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-5 md:space-y-10">
            <div className="max-w-[600px] mx-auto">
              <div className="text-2xl md:text-3xl text-center font-semibold capitalize">
                welcome to hotel telly
              </div>
            </div>
            <div className="max-w-[650px] mx-auto">
              <div className="text-black text-sm md:text-base text-center font-normal tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum unde excepturi facere. A atque voluptatum accusantium nostrum dignissimos. Odio temporibus facere, laborum beatae aut rerum quibusdam repellendus, veniam, dignissimos fugit eveniet nemo nobis assumenda non. Unde odio optio tempora.
              </div>
              <div className="pt-10 text-center">
                <Link href="" className="m-0 block">
                  <span className="text-black capitalize px-7 py-3 rounded-full border-slate-900 border">about us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row-reverse flex-wrap bg-[#F9F7F5]">
        <div className="w-full lg:w-7/12">
          <div className="py-20">
            <div className="container">
              <div className="space-y-5 md:space-y-7">
                <div className="text-2xl md:text-3xl font-semibold capitalize">
                  what activities we offer
                </div>
                <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum unde excepturi facere. A atque voluptatum accusantium nostrum dignissimos. Odio temporibus facere, laborum beatae aut rerum quibusdam repellendus, veniam, dignissimos fugit eveniet nemo nobis assumenda non. Unde odio optio tempora.
                </div>
                <div className="grid grid-cols-3 gap-10">
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/001.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">fishing</span>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/002.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">spa</span>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/003.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">bar</span>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/004.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">barbeque</span>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/005.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">dining</span>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-5">
                    <Image
                      alt="Icon"
                      width={30}
                      height={30}
                      src="/images/services/icons/006.png"
                    />
                    <span className="capitalize text-sm md:text-base font-medium text-slate-900">pool</span>
                  </div>
                </div>
                <div className="pt-5 md:pt-10">
                  <Link href="" className="m-0 block">
                    <span className="text-black capitalize text-sm md:text-base px-7 py-3 rounded-full border-slate-900 border">view all offers</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <div className="relative h-full min-h-[500px]">
            <Image
              fill={true}
              src="/images/services/1.png"
              style={{ objectFit: "cover" }}
              alt="Picture of an eat table setting"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-10">
            <div>
              <div className="text-2xl md:text-3xl font-semibold capitalize">
                our achievements
              </div>
              <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
                We are the top leading hotel with 22 years of experience
              </div>
            </div>
            <div className="grid grid-cols-4 place-items-center gap-10">
              <div className="col-span-4 text-center md:text-left sm:col-span-2 lg:col-span-1">
                <div className="font-bold text-3xl md:text-5xl capitalize text-black">
                  <Counter value={25} />k
                </div>
                <div className="text-sm uppercase font-light text-slate-900 tracking-widest">
                  happy clients
                </div>
              </div>
              <div className="col-span-4 text-center md:text-left sm:col-span-2 lg:col-span-1">
                <div className="font-bold text-3xl md:text-5xl capitalize text-black">
                  <Counter value={160} />
                </div>
                <div className="text-sm uppercase font-light text-slate-900 tracking-widest">
                  total rooms
                </div>
              </div>
              <div className="col-span-4 text-center md:text-left sm:col-span-2 lg:col-span-1">
                <div className="font-bold text-3xl md:text-5xl capitalize text-black">
                  <Counter value={28} />
                </div>
                <div className="text-sm uppercase font-light text-slate-900 tracking-widest">
                  awards won
                </div>
              </div>
              <div className="col-span-4 text-center md:text-left sm:col-span-2 lg:col-span-1">
                <div className="font-bold text-3xl md:text-5xl capitalize text-black">
                  <Counter value={100} />
                </div>
                <div className="text-sm uppercase font-light text-slate-900 tracking-widest">
                  team members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-10">
            <div>
              <div className="text-2xl md:text-3xl font-semibold capitalize">
                explore our rooms
              </div>
            </div>
            <div className="flex gap-5 md:gap-10 items-center">
              <div>
                <button>
                  <span className="bi-arrow-left-circle-fill text-4xl"></span>
                </button>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-5 md:gap-10">
                  <div className="col-span-1">
                    <div className="relative min-h-[200px]">
                      <Image
                        fill={true}
                        alt="Room 101"
                        src="/images/rooms/101.png"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="pt-2 capitalize text-slate-900">
                      classic rooms
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative min-h-[200px]">
                      <Image
                        fill={true}
                        alt="Room 102"
                        src="/images/rooms/102.png"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="pt-2 capitalize text-slate-900">
                      grand deluxe rooms
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative min-h-[200px]">
                      <Image
                        fill={true}
                        alt="Room 103"
                        src="/images/rooms/103.png"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="pt-2 capitalize text-slate-900">
                      ultra superior rooms
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button>
                  <span className="bi-arrow-right-circle-fill text-4xl"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="max-w-[600px]">
              <div className="space-y-5 md:space-y-7">
                <div className="text-slate-900 text-base md:text-lg text-center font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum unde excepturi facere. A atque voluptatum accusantium nostrum dignissimos. Odio temporibus facere, laborum beatae aut rerum quibusdam repellendus, veniam, dignissimos fugit eveniet nemo nobis assumenda non. Unde odio optio tempora.
                </div>
                <div className="uppercase text-slate-600 text-sm text-center tracking-widest">
                  jason hook, usa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap bg-[#F9F7F5]">
        <div className="w-full lg:w-7/12">
          <div className="py-20">
            <div className="container">
              <div className="space-y-5 md:space-y-7">
                <div className="text-2xl md:text-3xl font-semibold capitalize">
                  get in touch
                </div>
                <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis cupiditate dolorem aliquid doloremque aspernatur ratione.
                </div>
                <div className="space-y-1 md:space-y-3">
                  <div>
                    <span className="text-sm md:text-base font-semibold capitalize">address: </span>
                    <address className="text-sm md:text-base inline">
                      Tea Berry, Marinette, USA.
                    </address>
                  </div>
                  <div>
                    <span className="text-sm md:text-base font-semibold capitalize">phone: </span>
                    <Link href="">
                      <span className="text-sm md:text-base hover:underline">+31 939 7777</span>
                    </Link>
                    &#44;&nbsp;
                    <Link href="">
                      <span className="text-sm md:text-base hover:underline">+31 454 6233</span>
                    </Link>
                  </div>
                  <div>
                    <span className="text-sm md:text-base font-semibold capitalize">email: </span>
                    <Link href="mailto://info@myhotelwebsite.com">
                      <span className="text-sm md:text-base hover:underline">info@myhotelwebsite.com</span>
                    </Link>
                  </div>
                </div>
                <div className="pt-3 md:pt-5">
                  <Link href="/contact" className="m-0 block">
                    <span className="text-white capitalize text-sm md:text-base bg-slate-900 px-7 py-3 rounded-full border-slate-900 border">send a message</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <div className="relative h-full min-h-[500px]">
            <Image
              fill={true}
              style={{ objectFit: "cover" }}
              src="/images/get-in-touch/1.png"
              alt="Picture of an eat table setting"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-[500px] mx-auto">
            <div className="space-y-7 md:space-y-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold capitalize">
                  join our newsletter
                </div>
                <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
                  Sign up to our newsletter to receive updates about offers and promotions
                </div>
              </div>
              <div className="flex gap-3 p-1 border-2 rounded-full border-black">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="py-2 px-3 text-sm md:text-base outline-none border-none rounded-full block w-full flex-1"
                />
                <input
                  type="submit"
                  value="join"
                  className="rounded-full text-sm md:text-base tracking-wider px-7 py-2 bg-black text-white capitalize"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>    
  );
}