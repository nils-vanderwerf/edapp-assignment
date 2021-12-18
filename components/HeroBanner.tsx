import React, { FC } from "react";

interface BannerProps {
  image: string;
  alt: string;
}

const HeroBanner: FC<BannerProps> = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default HeroBanner;
