import React, { Component } from "react";
import "./App.css";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

import { product } from "./product.js";
import Template from "./components/Template.jsx";
import Popup from "./components/PopUp.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
      user: "",
      show: true,
    };
    this.setState = this.setState.bind(this);
  }

  render() {
    console.log(this.state.product, "here");

    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Template product={this.state.product} />
          <Popup user={this.state.user} show={this.state.show} set={this.setState} />
        </div>
          {this.state.user != "" && <img src="/welcome.jpg" alt="" />}
      </>
    );
  }
}

export default App;
