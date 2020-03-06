import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/"
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  HOME
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/blog"
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  BLOG
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/albums"
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  PHOTOS
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/projects"
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  PROJECTS
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/recipes"
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  RECIPES
                </NavLink>
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  to="/travel"
                  activeClassName="navbar__link--active"
                  className="navbar__link">
                  TRAVEL
                </NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
