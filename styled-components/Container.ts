import styled from "@emotion/styled";

const Container = styled.div`
  min-height: calc(100vh - 170px);
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  max-width: 1080px;
  @media (max-width: 1365px) {
    max-width: 100vw;
  }
  @media (max-width: 767px) {
    padding: 50px 20px;
  }
`;

export default Container;
