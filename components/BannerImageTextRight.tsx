import React, { FC } from "react";
import { BannerProps } from "./HeroBanner";
interface BannerTextRightProps extends BannerProps {
  content: JSX.Element;
}
const BannerImageTextRight: FC<BannerTextRightProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default BannerImageTextRight;
