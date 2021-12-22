import styled from "@emotion/styled";
const WhyEdAppStyles = styled.div`
  & .container {
    display: flex;
    gap: 20px;
    
  }
  p,
  h3 {
    text-align: center;
    line-height: 24px;
  }
  img {
    border-radius: 50%;
    width: 160px;
    display: block;
    margin: auto;
    margin-bottom: 30px;
  }
@media all and (max-width: 768px) {
  & .container {
    justify-content: center;
    flex-wrap: wrap;
  }
& .container > .col-sm-4 {
  margin-bottom: 40px; 
  
}
`;

export default WhyEdAppStyles;
