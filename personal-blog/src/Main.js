import React, { Component } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { HashRouter } from "react-router-dom";
import Router from "../src/components/router/Router";
import Header from '../src/components/header/Header'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Header/>
        <Container>
          <Router />
        </Container>
      </HashRouter>
    );
  }
}

export default Main;
