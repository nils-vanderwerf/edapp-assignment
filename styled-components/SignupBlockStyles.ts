import styled from "@emotion/styled";

const SignupBlockStyles = styled.div`
  background-color: #152231;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 40px 0;
  text-align: center;
  width: 100vw;
  & h2,
  & strong {
    font-size: 36px;
    max-width: 450px;
    margin: auto;
  }
  & a {
    color: #46b4e9;
    text-decoration: none;
    font-weight: 700;
  }
  & .demo.tight {
    margin-top: 10px;
  }
`;

export default SignupBlockStyles;
