import React, { Component } from "react";
import "./home.css";
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
      <div className="home">
        <div className="home-left">
          <img className="home-intro-image" src="./intro_photo.jpg"></img>
        </div>
        <div className="home-right">
          <h1>Danny Squitin</h1>
          <br/>
          <h4>
            Software Engineer.
            <br />
            Outdoorsman.
            <br />
            Beer, bourbon & barbeque fanatic. <br />
            Engaged. Dog & Cat Dad.
            <br />
            Residing in Phoenix, AZ.
          </h4>
          <div className="home-footer" style={{ color: "white" }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
