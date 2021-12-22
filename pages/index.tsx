import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import contentSections from "../content/contentSections";
import benefits from "../content/benefits";
import Navbar from "../components/Navbar";
import BannerImage from "../styled-components/BannerImage";
import TopTitleComponent from "../components/TopTitleComponent";
import Gap from "../styled-components/Gap";
import BannerTextImageComponent from "../components/BannerTextImageComponent";
import BannerWithTextLeftStyles from "../styled-components/BannerWithTextLeftStyles";
import BannerWithTextRightStyles from "../styled-components/BannerWithTextRightStyles";
import VideoStyles from "../styled-components/VideoStyles";
import CenteredTextContent from "../components/CenteredTextContent";
import CenteredTextStyles from "../styled-components/CentredTextStyles";
import EmbeddedVideo from "../components/EmbeddedVideo";
import HalfImageText from "../components/HalfImageText";
import HalfTextImageStyles from "../styled-components/HalfTextImageStyles";
import SignupBlock from "../components/SignupBlock";
import SignupBlockStyles from "../styled-components/SignupBlockStyles";
import WhyEdApp from "../components/WhyEdApp";
import WhyEdAppStyles from "../styled-components/WhyEdAppStyles";
import AutoHeightWithPadding from "../styled-components/AutoHeightWithPadding";
import ExploreMore from "../components/explore/ExploreMore";
interface IndexProps {
  categories: any;
}

console.log(benefits);

const Index: FC<IndexProps> = ({ categories }) => {
  console.log("EXPLORE");
  return (
    <Fragment>
      <div className="container">
        <Navbar />
      </div>

      <BannerImage
        className="banner-image-container"
        backgroundImage={"images/marley-spoon-hero-image.jpeg"}
      ></BannerImage>
      <Gap />
      <div className="container">
        <TopTitleComponent />
        <Gap />
      </div>
      <BannerWithTextRightStyles
        backgroundImage={"images/yellowBackground.jpeg"}
      >
        <div className="container block-dark">
          <BannerTextImageComponent content={contentSections[0].content} />
        </div>
      </BannerWithTextRightStyles>
      <Gap />
      <VideoStyles>
        <EmbeddedVideo
          width="893"
          height="502"
          embedId="https://www.youtube.com/embed/8J0QZndZU1U"
        />
      </VideoStyles>
      <Gap />
      <BannerWithTextLeftStyles backgroundImage={"images/greyBackground.jpeg"}>
        <div className="container block-dark">
          <BannerTextImageComponent content={contentSections[1].content} />
        </div>
      </BannerWithTextLeftStyles>
      <Gap />
      <CenteredTextStyles>
        <CenteredTextContent
          image="images/cutlery.png"
          alt="cutlery"
          content={contentSections[2].content}
        />
      </CenteredTextStyles>
      <Gap />
      <BannerWithTextRightStyles backgroundImage={"images/pinkBackground.jpeg"}>
        <AutoHeightWithPadding>
          <div className="container block-dark">
            <BannerTextImageComponent content={contentSections[3].content} />
          </div>
        </AutoHeightWithPadding>
      </BannerWithTextRightStyles>
      <Gap />
      <HalfTextImageStyles>
        <div className="container d-flex block-dark">
          <HalfImageText
            content={contentSections[4].content}
            image="images/ms-lesson-phone.png"
            alt="Marley spoon and EdApp courseware"
          />
        </div>
      </HalfTextImageStyles>
      <Gap />
      <CenteredTextStyles>
        <div className="container">
          <CenteredTextContent content={contentSections[5].content} />{" "}
        </div>
      </CenteredTextStyles>
      <Gap />
      <SignupBlockStyles>
        <div className="container">
          <SignupBlock />
        </div>
      </SignupBlockStyles>
      <Gap />
      <h2>Why EdApp</h2>
      <Gap />
      <WhyEdAppStyles>
        <div className="container d-flex">
          <div className="col xs-12 col-sm-4">
            <WhyEdApp
              image={benefits[0].image}
              alt={benefits[0].alt}
              heading={benefits[0].heading}
              paragraph={benefits[0].paragraph}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <WhyEdApp
              image={benefits[1].image}
              alt={benefits[1].alt}
              heading={benefits[1].heading}
              paragraph={benefits[1].paragraph}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <WhyEdApp
              image={benefits[2].image}
              alt={benefits[2].alt}
              heading={benefits[2].heading}
              paragraph={benefits[2].paragraph}
            />
          </div>
        </div>
      </WhyEdAppStyles>
      <Gap />

      <ExploreMore />
      <Gap />
      <SignupBlockStyles>
        <div className="container">
          <SignupBlock />
        </div>
      </SignupBlockStyles>
      <p>Footer - 4 Columns</p>
    </Fragment>
  );
};

export default Index;
