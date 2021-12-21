import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import BannerImage from "../styled-components/BannerImage";
import TopTitleComponent from "../components/TopTitleComponent";
import TitleSection from "../styled-components/TitleSection";
import Gap from "../styled-components/Gap";
import BannerTextImageComponent from "../components/BannerTextImageComponent";
import BannerWithTextLeftStyles from "../styled-components/BannerWithTextLeftStyles";
import BannerWithTextRightStyles from "../styled-components/BannerWithTextRightStyles";
import VideoStyles from "../styled-components/VideoStyles";
import CenteredTextContent from "../components/CenteredTextContent";
import CenteredTextStyles from "../styled-components/CentredTextStyles";
import BannerSlice from "../slices/BannerSlice";
import EmbeddedVideo from "../components/EmbeddedVideo";
import HalfImageText from "../components/HalfImageText";
import HalfTextImageStyles from "../styled-components/HalfTextImageStyles";
import SignupBlock from "../components/SignupBlock";
import SignupBlockStyles from "../styled-components/SignupBlockStyles";
const contentSections = [
  {
    content: (
      <div className="col-md-5 col-md-offset-7 text-center right-aligned">
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
      <div className="col-md-5 col-md-offset-7 text-center left-aligned">
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
  },
  {
    content: (
      <figure>
        <blockquote className="text-lg">
          EdApp allows for a more modern learning approach where our learners
          and our team members can access the materials anytime, anywhere.
        </blockquote>
        <figcaption>
          - Aga Strzemeska, Head of People Operations, Marley Spoon
        </figcaption>
      </figure>
    )
  },
  {
    content: (
      <div className="col-md-5 col-md-offset-7 text-center right-aligned">
        <h2>An enhanced learning experience with EdApp</h2>
        <p>
          Marley Spoon has a large number of team members, who are divided into
          various sub-departments, meaning certain courses are targetted to
          train specific groups. Utilising EdApp’s{" "}
          <a href="https://www.edapp.com/lms-features/">features</a> like User
          Groups and Push Notifications has enabled Marley Spoon to easily
          create and share content with these unique groups. When new content is
          ready, learners are notified in real-time with a push notification,
          sent straight to their mobile devices. Marley Spoon also incentivises
          its team members through EdApp’s built-in prizing feature. It sparks
          some friendly competition and winners are rewarded with real prizes.
        </p>
        <blockquote className="text-lg">
          Having our content on EdApp has made it more engaging, more fun, and
          more interactive.
        </blockquote>
      </div>
    )
  },
  {
    content: (
      <>
        <div className="col-md-5 col-md-offset-7 text-center left-aligned"></div>
        <h2>
          Why EdApp works for the food delivery and food manufacturing
          industries
        </h2>
        <p>
          For companies like Marley Spoon who are dealing with food, health and
          safety is always a priority. EdApp microlessons allow learners to
          complete important lessons anytime, anywhere in small, digestible
          chunks. What’s more, content can be revisited regularly to ensure
          processes are completed and, more importantly, understood.
        </p>
        <p>
          Whether employees are on-site at production centres, out delivering
          product or at the office, dispersed teams can complete their EdApp
          microlessons in five minutes or so, and revisit when it suits them.
          Lessons can be created, edited, and deployed to cohorts ensuring that
          all team members have the most up-to-date content at all times. The
          best part? All this can be done on learners’ mobile devices.
        </p>
      </>
    )
  },
  {
    content: (
      <figure>
        <blockquote className="text-lg">
          Food business and manufacturing are very fast-paced environments. So
          having a product [like EdApp] that can keep up with these changes is
          extremely valuable.
        </blockquote>
      </figure>
    )
  }
];
export default function Home() {
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
      <BannerWithTextRightStyles
        style={{ height: "auto", padding: "40px 0" }}
        backgroundImage={"images/pinkBackground.jpeg"}
      >
        <div className="container block-dark">
          <BannerTextImageComponent content={contentSections[3].content} />
        </div>
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
      <p>Why EdApp, repetable testamonials</p>
      <p>Explore more, 2 col</p>
      <p>Centred text on dark background, pnk to book a demo (repeat)</p>
      <p>Footer - 4 Columns</p>
    </Fragment>
  );
}
