import React, { FC } from "react";
import TitleSection from "../styled-components/TitleSection";

const TopTitleComponent: FC = () => {
  return (
    <TitleSection>
      <div style={{ position: "relative" }} id="logo">
        <img src="images/marley-spoon-logo.png" alt="Marley Spoon Logo" />
      </div>
      <div className="top-text">
        <h1>EdApp & Marley Spoon</h1>
        <h2 className="text-lg">A Food Services Case Study</h2>
        <p>
          This is how Marley Spoon leveraged EdApp to onboard hundreds of new
          employees to support the unprecedented growth brought on by COVID-19.
        </p>
      </div>
    </TitleSection>
  );
};

export default TopTitleComponent;
