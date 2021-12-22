import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  & .container.d-flex {
    justify-content: space-between;
  }
`;

export default StyledFooter;
