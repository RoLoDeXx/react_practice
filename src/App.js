import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="KonTact" />
        <Contacts />
      </div>
    );
  }
}
