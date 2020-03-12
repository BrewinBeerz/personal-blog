import React, { Component } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import Router from "../src/components/router/Router";
import Header from '../src/components/header/Header'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Header/>
          <Router />
      </HashRouter>
    );
  }
}

export default Main;
