import styled from "@emotion/styled";

export interface StyledImageProps {
  backgroundImage: string;
}

const BannerImage = styled.div<StyledImageProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 450px;
`;

export default BannerImage;
