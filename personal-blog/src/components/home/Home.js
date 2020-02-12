import React, { Component } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel, Card, CardImg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faFlickr,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  render() {
    return (
      <div>          
          <Card className="text-center">
            <Card.Body id="intro-body">
              <Card.Text id="intro-text">
                <h2 style={{fontWeight: 'bold'}}>{'> Hello World'}</h2>
                <p>
                  Software Engineer. Dog & Cat Dad. Beer, bourbon and BBQ
                  enthusiast. Currently residing in Phoenix, AZ.
                </p>
              </Card.Text>
            </Card.Body>
            <CardImg
              className="ml-auto mr-auto"
              id="intro-image"
              src="./intro_photo.jpg"
              roundedCircle
            />
          </Card>
          <Card id="social" className="text-center">
            <Card.Body>
              <Card.Title>
                <a
                  id="links"
                  href="https://www.facebook.com/danny.squitin"
                  className="facebook social"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                  id="links"
                  href="https://twitter.com/DSquitin"
                  className="twitter social"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a
                  id="links"
                  href="https://soundcloud.com/dnzo"
                  className="soundcloud social"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSoundcloud} size="1x" />
                </a>
                <a
                  id="links"
                  href="https://github.com/BrewinBeerz"
                  className="github social"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
                <a
                  id="links"
                  href="https://www.flickr.com/photos/156696884@N02/"
                  className="flickr social"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFlickr} size="1x" />
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
      </div>
    );
  }
}

export default Home;
