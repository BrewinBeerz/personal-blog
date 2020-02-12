import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import "./Photos.css";

export default function Photos() {
  return (
    <div>
      <h2 style={{paddingBottom: '20px', paddingTop: '20px'}}>Photos</h2>
      <CardDeck className="photo-card-deck">
        <Card className="photo-card">
          <Link to="/Arches">
            <Card.Img
              variant="top"
              src="/arches_card.jpg"
              className="photo-card-image"
            />
          </Link>
          <Card.Body className="photo-card-body">
            <Link to="/Arches">
              <Card.Title>Arches National Park</Card.Title>
            </Link>
            <Card.Text className="photo-card-text">
              Photos taken during our trip to Arches National Park in September
              2019.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
