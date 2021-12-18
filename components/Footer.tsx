import React from "react";
import { Footer as StyledFooter } from "../styled-components/Footer";

const Footer = () => {
  return (
    <StyledFooter>
      <span>Ed &copy; {new Date().getFullYear()}</span>
    </StyledFooter>
  );
};

export default Footer;
