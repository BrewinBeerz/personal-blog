import React, { Component } from "react"
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import Nav from "react-bootstrap/Nav"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home"
import Blog from "./Blog";
import Photos from "./Photos";
import Projects from "./Projects";
import Recipes from "./Recipes";
import Travel from "./Travel";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Danny Squitin</h1>
                            <p>Homebrew. Bourbon. BBQ. Engineering. Travel.</p>
                            <Navbar collapseOnSelect>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto mr-auto" >
                                        <Nav.Item>
                                           <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><NavLink to="/Blog">Blog</NavLink></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><NavLink to="/Photos">Photos</NavLink></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><NavLink to to="/Projects">Projects</NavLink></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><NavLink to="/Recipes">Recipes</NavLink></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><NavLink to="/Travel">Travel</NavLink></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Container>
                    </Jumbotron>
                </div>
                <Container>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Blog" component={Blog} />
                        <Route exact path="/Photos" component={Photos} />
                        <Route exact path="/Projects" component={Projects} />
                        <Route exact path="/Recipes" component={Recipes} />
                        <Route exact path="/Travel" component={Travel} />
                    </div>
                </Container>
            </HashRouter>
        )
    }
}

export default Main