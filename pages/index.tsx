import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>On this Page</h1>
      <ul>
        <li>Nav Bar</li>
        <li>Banner</li>
        <li>Title</li>
        <li>Subtitle</li>
        <li>Image with text, image left, text right</li>
        <li>Video</li>
        <li>Image with text, text left image right</li>
        <li>Centred text on top of image, including quote</li>
        <li>Pink Image with text, image left, text right</li>
        <li>
          Image with text, image right, text left on white (Image spans 50%)
        </li>
        <li>Centred text</li>
        <li>Centred text on dark background, link to book a demo</li>
        <li>Why EdApp, repetable testamonials</li>
        <li>Explore more, 2 col</li>
        <li>Centred text on dark background, link to book a demo (repeat)</li>
        <li>Footer - 4 Columns</li>
      </ul>
    </div>
  );
}
