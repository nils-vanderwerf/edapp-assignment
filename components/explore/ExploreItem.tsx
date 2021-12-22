import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import ExploreItemContainer from "../../styled-components/ExploreItemContainer";
interface ExploreItemProps {
  category: any;
  key: number;
}

const ExploreItem: FC<ExploreItemProps> = ({ category, key }) => {
  const content = category.content;
  console.log("MAPPED CATEGORY", content);
  return <ExploreItemContainer>{content}</ExploreItemContainer>;
};

export default ExploreItem;
