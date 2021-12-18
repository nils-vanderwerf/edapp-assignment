import React, { ReactFragment as Fragment } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

interface BannerImageProps {
  image: string;
}

const BannerSlice: React.FC<BannerImageProps> = ({ image }) => {
  <Fragment>
    <section className="homepage-banner">
      <div className="banner-content container">
        <img src={image} alt={slice.primary["hero-banner-image"].alt} />
      </div>
    </section>
  </Fragment>;
};
