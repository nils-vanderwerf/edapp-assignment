import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import BannerImage from "../styled-components/BannerImage";
import TopTitleComponent from "../components/TopTitleComponent";
import TitleSection from "../styled-components/TitleSection";
import Gap from "../styled-components/Gap";
import BannerTextImageComponent from "../components/BannerTextImageConponent";
import BannerWithTextLeftStyles from "../styled-components/BannerWithTextLeftStyles";
import BannerWithTextRightStyles from "../styled-components/BannerWithTextRightStyles";

import BannerSlice from "../slices/BannerSlice";
import EmbeddedVideo from "../components/EmbeddedVideo";

const contentSections = [
  {
    content: (
      <div className="col-md-5 col-md-offset-7 text-center left-aligned">
        <h2>Onboarding hundreds of new team members during COVID-19</h2>
        <p>
          Marley Spoon typically onboards new staff with face-to-face training,
          complemented by surveys. Since COVID-19, however, more people opted to
          order fresh ingredients to their doors, which resulted in a tremendous
          surge in demand.
        </p>
        <p>
          As an essential business provider, Marley Spoon was able to hire the
          largest amount of staff in the smallest amount of time on record.
          Since classroom training was no longer a viable option, Marley Spoon
          required a solution that could easily onboard and train their hundreds
          of new team members efficiently and effectively.
        </p>
      </div>
    )
  },
  {
    content: (
      <div className="col-md-5 col-md-offset-7 text-center right-aligned">
        <h2>Deploying lesson content quickly and easily</h2>
        <p>
          EdApp facilitated Marley Spoon’s influx of new starters by reaching
          and training every new team member on crucial information. Before the
          implementation of EdApp, this would not have been possible to achieve
          at scale and in such a short period of time. While representing Marley
          Spon’s strong brand identity, EdApp enabled the delivery of vital
          information like food safety and procedures.
        </p>
      </div>
    )
  }
];
export default function Home() {
  return (
    <Fragment>
      <div className={styles.container}>
        <Navbar />
      </div>
      <BannerImage
        className="banner-image-container"
        backgroundImage={"images/marley-spoon-hero-image.jpeg"}
      ></BannerImage>
      <Gap />
      <div className={styles.container}>
        <TopTitleComponent />
        <Gap />
      </div>
      <BannerWithTextRightStyles
        backgroundImage={"images/yellowBackground.jpeg"}
      >
        <div className={styles.container}>
          <BannerTextImageComponent content={contentSections[0].content} />
        </div>
      </BannerWithTextRightStyles>
      <Gap />
      <EmbeddedVideo
        width="893"
        embedId="https://www.youtube.com/embed/8J0QZndZU1U"
      />
      <Gap />
      <BannerWithTextLeftStyles backgroundImage={"images/greyBackground.jpeg"}>
        <div className={styles.container}>
          <BannerTextImageComponent content={contentSections[1].content} />
        </div>
      </BannerWithTextLeftStyles>
      <p>Image with text, text left image right</p>
      <p>Centred text on top of image, including quote</p>
      <p>Pink Image with text, image left, text right</p>
      <p>Image with text, image right, text left on white (Image spans 50%)</p>
      <p>Centred text</p>
      <p>Centred text on dark background, pnk to book a demo</p>
      <p>Why EdApp, repetable testamonials</p>
      <p>Explore more, 2 col</p>
      <p>Centred text on dark background, pnk to book a demo (repeat)</p>
      <p>Footer - 4 Columns</p>
    </Fragment>
  );
}
