import styled from "@emotion/styled";

const Nav = styled.header`
  display: flex;
  position: fixed;
  background-color: #fff;
  left: 0;
  justify-content: space-between;
  height: 48px;
  padding: 32px 20px; 32px;
  align-content: center;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};

  & > div { 
    justify-context: center;
    max-width: 1080px;
  }

  & > header {
    justify-context: center;
    max-width: 1080px;
  }
  & > div > div {
    display: flex;
  }
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
  }
  & > div {
    justify-content: space-between;

    height: 48px;
    padding: 32px 0 32px;
  }

  & > .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > a:not(:nth-of-type(1)) {
    margin-left: 15px;
  }

  @media (max-width: 1079px) {
    max-width: 100vw;
  }
`;

export default Nav;
