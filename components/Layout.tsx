import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import Container from "../styled-components/Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  title = "EdApp Marley Spoon case study"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap"
        />
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
