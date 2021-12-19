import styled from "@emotion/styled";
import { StyledImageProps } from "./BannerImage";

export interface BannerTextLeftProps extends StyledImageProps {
  text: string;
}

const BannerImageTextLeftStyles = styled.div<BannerTextLeftProps>`
  display: flex;
  margin-left: auto;
`;

export default BannerImageTextLeftStyles;
