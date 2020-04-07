import * as React from "react";
import Logo from "../images/Logo.png";
import "./css/mainLogo.css";

interface LogoProps {}

export const MainLogo: React.FC<LogoProps> = (props) => {
  return (
    <div className="logo-Wrapper">
      <img src={Logo} className="logo" alt="Store logo"></img>
    </div>
  );
};

export default MainLogo;
