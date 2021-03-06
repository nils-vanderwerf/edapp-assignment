import styled from "@emotion/styled";
import BannerImage from "./BannerImage";

const BannerWithTextLeftStyles = styled(BannerImage)`
  display: flex;
  text-align: center;
  align-items: center;
  & .left-aligned {
    margin-right: auto;
  }
`;

export default BannerWithTextLeftStyles;
