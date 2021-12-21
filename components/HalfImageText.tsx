import React, { FC } from "react";

interface HalfImageTextProps {
  content: JSX.Element;
  image: string;
  alt: string;
}

const HalfImageText: FC<HalfImageTextProps> = ({ content, image, alt }) => {
  return (
    <>
      <div className="col-md-6 d-tc">{content}</div>
      <div className="col-md-6 d-tc">
        <img src={image} alt={alt} />
      </div>
    </>
  );
};

export default HalfImageText;
