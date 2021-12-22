import React from "react";
import { Footer as StyledFooter } from "../styled-components/Footer";

const footerElements = {
  column1: [
    "Gamification",
    "Active Learning",
    "Mobile Learning",
    "Authoring Tool",
    "Spaced Repetition",
    "Rapid Refresh"
  ],
  column2: [
    "Pricing",
    "LMS Integration",
    "Retail Training",
    "Template Library",
    "Educate All"
  ],
  column3: [
    "Support",
    "Contact Us",
    "Webinars",
    "Learner FAQs",
    "Our Clients",
    "Ed Performance Team",
    "Media"
  ],
  column4: [
    "Blog",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Twitter",
    "YouTube",
    "Careers"
  ],
  column5: ["Terms", "Privacy Policy", "Acceptable Use", "Ed © 2021"]
};
const Footer = () => {
  {
    footerElements.column1.map((el: string) => {
      console.log("EL", el);
    });
  }
  return (
    <>
      <div className="column1">
        <h4 className="text-bold">Features</h4>
        <ul className="footer-list">
          {footerElements.column1.map((el: string) => {
            <li className="text-muted">`${el}`</li>;
          })}
        </ul>
      </div>
      <div className="column-2">
        <h4 className="text-bold">Product</h4>
        <ul className="footer-list">
          {footerElements.column2.map((el: string) => {
            <li className="text-muted">`${el}`</li>;
          })}
        </ul>
      </div>
      <div className="column-3">
        <h4 className="text-bold">Support</h4>
        <ul className="footer-list">
          {footerElements.column3.map((el: string) => {
            <li className="text-muted">`${el}`</li>;
          })}
        </ul>
      </div>
      <div className="column-4">
        <h4 className="text-bold">Connect</h4>
        <ul className="footer-list">
          {footerElements.column4.map((el: string) => {
            <li className="text-muted">`${el}`</li>;
          })}
        </ul>
      </div>
      <div className="column-5">
        <h4 className="text-bold">Legal</h4>
        <ul className="footer-list">
          {footerElements.column5.map((el: string) => {
            <li className="text-muted">{el}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Footer;
