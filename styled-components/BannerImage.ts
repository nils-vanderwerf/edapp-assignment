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
  @media all and (max-width: 720px) {
    width: 100vw;
    & .block-dark {
      display: flex;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      height: 100%;
      align-items: center;
    }
  }
  @media (min-width: 576px) {
    .container,
    .container-sm {
      max-width: 100%;
      & .left-aligned,
      & .right-aligned {
        max-width: 90%;
        margin: auto;
      }
    }
  }
`;

export default BannerImage;
