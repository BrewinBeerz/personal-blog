import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import './Photos.css'
 
class Photos extends Component {
  render() {
    return (
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
    );
  }
}
 
export default Photos;