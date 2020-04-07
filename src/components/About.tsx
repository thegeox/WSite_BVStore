import * as React from "react";
import imgValentina from "../images/about_2.jpg";
import imgBruno from "../images/about_3.jpg";
import "./css/about.css";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div className="wrapper">
      <h1 className="title">Nuestra motivación</h1>
      <div className="photoBox">
        <img src={imgValentina} />
        <div>
          <h2 className="subtitle">Valentina</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            veritatis quae dolorem, ratione sapiente accusamus a aut tempore
            porro accusantium assumenda voluptatum eaque magnam quos consequatur
            aspernatur obcaecati consequuntur aliquam.
          </p>
        </div>
      </div>
      <div className="photoBox">
        <img src={imgBruno} />
        <div>
          <h2 className="subtitle">Bruno</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            veritatis quae dolorem, ratione sapiente accusamus a aut tempore
            porro accusantium assumenda voluptatum eaque magnam quos consequatur
            aspernatur obcaecati consequuntur aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
