import styled from "@emotion/styled";

const CenteredTextStyles = styled.div`
  margin: auto;
  padding-bottom: 40px;
  & figcaption {
    text-align: right;
  }
  & img {
    max-width: 100%;
  }

  & .text-lg {
    font-size: 24px;
  }
  @media all and (min-width: 720px) {
    width: 100%;
    max-width: 520px;
  }
`;

export default CenteredTextStyles;
