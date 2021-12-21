import styled from "@emotion/styled";
import BannerImage from "./BannerImage";

const BannerWithTextRightStyles = styled(BannerImage)`
  display: flex;
  text-align: center;
  align-items: center;
  & .right-aligned {
    margin-left: auto;
  }
`;

export default BannerWithTextRightStyles;
