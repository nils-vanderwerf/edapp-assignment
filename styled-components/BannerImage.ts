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
  min-height: 450px;
  & blockquote {
    font-size: 24px;
    padding: 40px 0;
    text-align: left;
  }

  & blockquote::before {
    color: #fff;
    content: '"';
    margin-right: 10px;
    font-size: 1.333rem;
  }
  @media all and (max-width: 768px) {
    & .container.block-dark {
      max-width: 100vw;
      width: 100vw;
    }
    & .block-dark {
      display: flex;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      height: 100%;
      align-items: center;
    }
  }
  @media (max-width: 576px) {
      & .left-aligned,
      & .right-aligned {
        max-width: 90%;
        margin: auto;
      }
    }
  }
`;

export default BannerImage;
