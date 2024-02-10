export type Route = {
  name: string,
  href: string,
}

export const routes: Route[] = [
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