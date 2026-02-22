import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/shadcn/ui/button";

import { navs } from "./props";
import { MenuIcon, SquareArrowOutUpRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";

export function Header() {
  return (
    <header className="z-10 py-3 top-0 left-0 w-full sticky shadow-lg bg-foreground/50 backdrop-blur-sm">
      <div className="container">
        <div className="@container/flex">
          <div className="h-14 flex items-center justify-between">
            <div className="flex-none">
              <Link href="/">
                <Image
                  width="120"
                  height="35"
                  src="/hotel-telly.png"
                  alt="Hotel Telly Logo"
                />
              </Link>
            </div>
            <div className="flex-none hidden @5xl/flex:block">
              <div className="flex gap-10 items-center">
                {navs.map(({ href, name }, index) => (
                  <Fragment key={index}>
                    <div className="flex-none">
                      <Button asChild size={null} type="button" variant="link" className="text-base font-semibold decoration-2">
                        <Link href={href} className="text-white uppercase">
                          {name}
                        </Link>
                      </Button>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex-none hidden @5xl/flex:block">
              <Button asChild size="lg" type="button" variant="outline" className="py-3 px-10 text-base font-semibold rounded-full h-auto! bg-transparent!">
                <Link href="/book-now">
                  <span className="uppercase text-white">book now</span>
                </Link>
              </Button>
            </div>
            <div className="flex-none @5xl/flex:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    type="button"
                    variant="outline"
                    className="py-3 px-10 gap-3 text-base font-semibold rounded-full h-auto! bg-transparent!"
                  >
                    <MenuIcon className="size-6 text-white" />
                    <span className="uppercase text-white">menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="bottom" className="w-sm @5xl/flex:hidden!">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-sm">
                      <span className="uppercase">quick links</span>
                    </DropdownMenuLabel>
                    {navs.map(({ href, name }, index) => (
                      <Fragment key={index}>
                        <DropdownMenuItem className="py-3 text-base font-medium">
                          <span className="capitalize">{name}</span>
                          <SquareArrowOutUpRight className="ml-auto" />
                        </DropdownMenuItem>
                      </Fragment>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}