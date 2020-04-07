import React from "react";
import GMapContainer from "./GMapContainer";
import "./css/pickupStore.css";

interface Props {}

const Contact = (props: Props) => {
  return (
    <div className="cPickupStores_MainWrapper">
      <div className="mapWrapper">
        <GMapContainer />
      </div>
      <div className="locationInfoBox">
        <h3>Store Pickups</h3>
        <ul>
          <li>
            <a>Güegüe Store (Gü)</a>
          </li>
          <li>
            <a>Colectiva Bamboo (CB)</a>
          </li>
          <li>
            <a>Comercial San Antonio (CS)</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
