import React from "react";
import img1 from "../images/productLine_1.png";
import "./css/home.css";

interface IHomeProps {
  //imageUrl: string;
}

const Home: React.FC<IHomeProps> = (props) => {
  const imageUrl = img1;
  return (
    <div className="home_MainContainer">
      <div className="cHome_Wrapper">
        <div
          className="cHome_Img_Section"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
