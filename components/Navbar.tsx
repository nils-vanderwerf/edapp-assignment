import Link from "next/link";
import React, { FC } from "react";
import Brand from "../styled-components/Brand";
import Header from "../styled-components/Header";
import Nav from "../styled-components/Nav";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavbarLink[];
}

const defaultLinks: NavbarLink[] = [{ label: "Home", href: "/" }];

const Navbar: FC<NavbarProps> = ({
  brand = "Marley Spoon",
  links: linksFromProps
}) => {
  const links = linksFromProps
    ? [...defaultLinks, ...linksFromProps]
    : defaultLinks;

  return (
    <header className="navbar-menu">
      <ul className="nav-bar">
        <Link href="/">Features</Link>
        <Link href="/">A Mobile LMS</Link>
        <Link href="/">Course Library</Link>
        <Link href="/">Industries</Link>
        <Link href="/">Educate All</Link>
        <Link href="/">Support</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Log In</Link>
        <Link href="/">Sign Up Free</Link>
      </ul>
    </header>
  );
};

export default Navbar;
