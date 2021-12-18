import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import BannerImage from "../styled-components/BannerImage";
import TopTitleComponent from "../components/TopTitleComponent";
import TitleSection from "../styled-components/TitleSection";
import Gap from "../styled-components/Gap";

export default function Home() {
  return (
    <>
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
        <p>Subtitle</p>
        <p>Image with text, image left, text right</p>
        <p>Video</p>
        <p>Image with text, text left image right</p>
        <p>Centred text on top of image, including quote</p>
        <p>Pink Image with text, image left, text right</p>
        <p>
          Image with text, image right, text left on white (Image spans 50%)
        </p>
        <p>Centred text</p>
        <p>Centred text on dark background, pnk to book a demo</p>
        <p>Why EdApp, repetable testamonials</p>
        <p>Explore more, 2 col</p>
        <p>Centred text on dark background, pnk to book a demo (repeat)</p>
        <p>Footer - 4 Columns</p>
      </div>
    </>
  );
}
