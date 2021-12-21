import React, { FC } from "react";

interface BannerTextProps {
  content: JSX.Element;
}
const BannerTextImageComponent: FC<BannerTextProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default BannerTextImageComponent;
