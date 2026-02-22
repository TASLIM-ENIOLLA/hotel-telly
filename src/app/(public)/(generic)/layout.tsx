"use client";

import { Fragment } from "react/jsx-runtime";

import { Hero } from "./$hero";
import { Header } from "./$header";
import { Offers } from "./$offers";
import { Expose } from "./$expose";
import { Footer } from "./$footer";
import { Welcome } from "./$welcome";
import { Explore } from "./$explore";
import { Contact } from "./$contact";
import { Newsletter } from "./$newsletter";
import { Achievements } from "./$achievement";
import { Testimonials } from "./$testimonials";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Welcome />
      <Offers />
      <Achievements />
      <Explore />
      <Testimonials />
      <Expose />
      <Contact />
      <Newsletter />
      <Footer />
      <style jsx global>{`
        body {
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/hero-bg.png");
        }
      `}</style>
    </Fragment>
  );
}