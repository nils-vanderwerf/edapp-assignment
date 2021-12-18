import React from "react";
import { RichText } from "prismic-reactjs";

const BannerSlice = ({ slice }) => (
  <>
    {console.log("THE SLICE IS", slice)}
    <section>
      <img
        src={slice.primary["hero-banner-image"].url}
        alt={slice.primary["hero-banner-image"].alt}
      />
    </section>
  </>
);

export default BannerSlice;
