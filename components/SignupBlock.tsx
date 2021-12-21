import React from "react";
import StyledSignupButton from "../styled-components/StyledSignupButton";

const SignupBlock = () => {
  return (
    <div className="signupBlock">
      <h2 className="title text-xxl">
        EdApp is <strong>easy-to-use and free</strong> for you and your team. No
        credit card required.
      </h2>
      <StyledSignupButton>
        <div className="signup-btn btn btn-blue">
          <div
            className="block-h-sm block-v-xs"
            data-testid="signUpBlockButton"
          >
            Sign up free
          </div>
        </div>
      </StyledSignupButton>
      <p class="demo tight">
        or <a href="mailto:demo@edapp.com">book a demo </a>with us today!
      </p>
    </div>
  );
};

export default SignupBlock;
