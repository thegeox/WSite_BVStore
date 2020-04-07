import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import MainLogo from "./components/MainLogo";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PickupStore from "./components/PickupStore";

function App() {
  return (
    <div className="cApp_MainContainer">
      <Router>
        <NavBar></NavBar>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pickupstore" component={PickupStore} />
      </Router>
    </div>
  );
}

export default App;
