import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./blog-nav.css";

export default function BlogNav() {
  return (
    <div className="home-nav">
      <div className="blinking-div">
        <h1 className="prompt">BrewinBeerz:~$</h1>
        <h1 className="blinking">|</h1>
      </div>
      <div className="header-nav nav">
        <Navbar collapseOnSelect>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/">Home</NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/blog">Blog</NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/photos">Photos</NavLink>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link>
                  <NavLink to="/projects">Projects</NavLink>
                </Nav.Link>
              </Nav.Item> 
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/recipes">Recipes</NavLink>
                </Nav.Link>
              </Nav.Item>*/}
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/travel">Travel</NavLink>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
