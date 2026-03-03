import { Fragment } from "react/jsx-runtime";

import { Hero } from "./$hero";
import { Offers } from "./$offers";
import { Expose } from "./$expose";
import { Welcome } from "./$welcome";
import { Explore } from "./$explore";
import { Contact } from "./$contact";
import { Newsletter } from "./$newsletter";
import { Achievements } from "./$achievement";
import { Testimonials } from "./$testimonials";

import { getPage } from "./actions";

export default async function Layout() {
  const page = await getPage();
  const pageData = page.data;

  return (
    <Fragment>
      <Hero {...pageData.heroSection} />
      <Welcome {...pageData.welcomeSection} />
      <Offers {...pageData.offersSection} />
      <Achievements {...pageData.achievementsSections} />
      <Explore {...pageData.roomsSection} />
      <Testimonials {...pageData.testimonialsSection} />
      <Expose {...pageData.mediaSection} />
      <Contact {...pageData.contactSection} />
      <Newsletter {...pageData.newsletterSection} />
    </Fragment>
  );
}

export async function generateMetadata() {
  const page = await getPage();
  const pageData = page.data;

  return {
    title: pageData.title,
    description: pageData.description,
  }
}