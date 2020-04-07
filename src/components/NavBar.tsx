import * as React from "react";
import { Link } from "react-router-dom";
import { SocialMediaLink, SocialMediaPlatform } from "./SocialMediaLink";
import "./css/navBar.css";
import Logo from "../images/Logo.png";

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = (props) => {
  return (
    <nav>
      <Link to="/" className="logoAsLink">
        <img src={Logo} className="logoAsLink"></img>
      </Link>
      <ul className="pageLinks">
        <li>
          <a>Productos</a>
        </li>
        <li>
          <Link to={`/PickupStore/`}>Puntos de entrega</Link>
        </li>
        <li>
          <Link to={`/About/`}>Sobre nosotros</Link>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>

      <ul className="platformLinks">
        <li>
          <SocialMediaLink
            pageNameOnPlatform="BrunoValentinaStore"
            socialPlatform={SocialMediaPlatform.FB}
          />
        </li>
        <li>
          <SocialMediaLink
            pageNameOnPlatform="dongelatinonic"
            socialPlatform={SocialMediaPlatform.TWTR}
          />
        </li>
        <li>
          <SocialMediaLink
            pageNameOnPlatform="bvstore_nic"
            socialPlatform={SocialMediaPlatform.NSTGRM}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
