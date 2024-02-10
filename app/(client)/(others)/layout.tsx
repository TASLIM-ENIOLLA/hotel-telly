import { Fragment } from "react";

import Header from "@/components/pages/Header";

type LayoutProps = {
  children: React.ReactNode
}

export default function Page({ children}: LayoutProps) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}


type Route = {
  name: string,
  href: string,
}

const routes: Route[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about us",
    href: "/about-us",
  },
  {
    name: "rooms",
    href: "/rooms",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "contact",
    href: "/contact",
  }
];