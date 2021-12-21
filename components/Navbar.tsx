import Link from "next/link";
import React, { FC } from "react";
import Brand from "../styled-components/Brand";
import Header from "../styled-components/Header";
import Nav from "../styled-components/Nav";
import styles from "../styles";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavbarLink[];
}

const defaultLinks: NavbarLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/" },
  { label: "A Mobile LMS", href: "/" },
  { label: "Course Library", href: "/" },
  { label: "Industries", href: "/" },
  { label: "Educate All", href: "/" },
  { label: "Testimonials", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Login", href: "/" },
  { label: "Sign Up Free", href: "/" }
];

const Navbar: FC<NavbarProps> = ({
  brand = "Marley Spoon",
  links: linksFromProps
}) => {
  const links = linksFromProps
    ? [...defaultLinks, ...linksFromProps]
    : defaultLinks;

  return (
    <Header>
      <div className="container">
        <Link href="/">
          <Brand>{brand}</Brand>
        </Link>
        <Nav>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;
