import { Fragment } from "react/jsx-runtime";

import { Header } from "./$header";
import { Footer } from "./$footer";

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}