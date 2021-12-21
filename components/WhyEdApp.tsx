import React, { FC } from "react";

interface WhyEdAppProps {
  image: string;
  alt: string;
  heading: string;
  paragraph: string;
}
const WhyEdApp: FC<WhyEdAppProps> = ({ image, alt, heading, paragraph }) => {
  return (
    <div className="why-ed-app-block">
      <img src={image} alt={alt} />
      <h3 className="text-muted">{heading}</h3>
      <p className="text-muted">{paragraph}</p>
    </div>
  );
};

export default WhyEdApp;
