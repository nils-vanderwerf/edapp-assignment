import React, { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { Date, Link, RichText } from "prismic-reactjs";
import BannerSlice from "../slices/BannerSlice";

interface IndexProps {}
const Index: FC<IndexProps> = () => {
  return <BannerSlice />;
};

export default Index;
