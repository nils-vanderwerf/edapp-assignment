import React, { FC } from "react";
import styled from "@emotion/styled";
import ExploreItem from "./ExploreItem";
import exploreCategories from "../../content/exploreCategories";

const ExploreListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60px;
    margin-right: 20px;
  }
  a {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
  }
  h5.text-muted {
    color: #848f9d;
    text-transform: uppercase;
    font-size: 0.83333rem;
    letter-spacing: 0.016em;
  }
`;
const ExploreMore = () => {
  console.log("CATEGORIES", exploreCategories);
  return (
    <ExploreListContainer>
      <h5 className="text-muted text-center">Explore more</h5>
      {exploreCategories.map((c: any, i: number) => (
        <ExploreItem key={i} category={c} />
      ))}
    </ExploreListContainer>
  );
};

export default ExploreMore;
