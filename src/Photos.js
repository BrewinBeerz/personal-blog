import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import CardGroup from "react-bootstrap/CardGroup"
import './Photos.css'
import Arches from "./Arches"
import Canyonlands from './Canyonlands'
import GrandCanyon from './GrandCanyon'
 
class Photos extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <CardGroup>
              <Card>
              <Link to="/Arches"><Card.Img variant="top" src="/arches_card.jpg"></Card.Img></Link>
                <Card.Body>
                  <Card.Title>Arches National Park</Card.Title>
                  <Card.Text>
                    September - 2019
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="/canyonlands_card.jpg" />
                <Card.Body>
                  <Card.Title>Canyonlands National Park</Card.Title>
                  <Card.Text>
                    September - 2019
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="/grandcanyon_card.jpg" />
                <Card.Body>
                  <Card.Title>Grand Canyon National Park</Card.Title>
                  <Card.Text>
                    July - 2019
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
        </div>
        <Container>
          <div className="content">
              <Route exact path="/Arches" component={Arches} />
              <Route exact path="/Canyonlands" component={Canyonlands} />
              <Route exact path="/GrandCanyon" component={GrandCanyon} />
          </div>
        </Container>
      </HashRouter>
    );
  }
}
 
export default Photos;