import React from 'react'
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
          <Jumbotron fluid>
            <Container>
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
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/projects">Projects</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/recipes">Recipes</NavLink>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <NavLink to="/travel">Travel</NavLink>
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
