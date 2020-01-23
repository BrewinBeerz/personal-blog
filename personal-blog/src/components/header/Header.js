import React from 'react'
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
          <Jumbotron fluid>
            <Container>
              <h1>Danny Squitin</h1>
              <p>Brewin' Beerz</p>
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
                        <NavLink to="/Blog">Blog</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/Photos">Photos</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/Projects">Projects</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/Recipes">Recipes</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/Travel">Travel</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </Jumbotron>
        </div>
    )
}
