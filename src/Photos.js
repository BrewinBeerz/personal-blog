import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import CardDeck from "react-bootstrap/CardDeck"
import './Photos.css'
 
class Photos extends Component {
  render() {
    return (
        <div>
          <h2>Photos</h2>
          <CardDeck>
            <Card>
              <Link to="/Arches"><Card.Img variant="top" src="/arches_card.jpg"/></Link>
              <Card.Body>
              <Card.Title>Arches National Park</Card.Title>
              <Card.Text>
                Photos taken during our trip to Arches National Park in September 2019.
              </Card.Text>
            </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/canyonlands_card.jpg" />
              <Card.Body>
              <Card.Title>Canyonlands National Park</Card.Title>
              <Card.Text>
                Photos taken during our trip to Canyonlands National Park in September 2019.
              </Card.Text>
            </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/grandcanyon_card.jpg" />
              <Card.Body>
              <Card.Title>Grand Canyon National Park</Card.Title>
              <Card.Text>
                Photos taken during our camping trip to Grand Canyon National Park in August 2019.
              </Card.Text>
            </Card.Body>
            </Card>
          </CardDeck>
        </div>
    );
  }
}
 
export default Photos;