import React from "react";

import "./custom_buttom.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  type,
  handleClick,
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    type={type}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default CustomButton;
