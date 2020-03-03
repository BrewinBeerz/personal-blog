import React from 'react'
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faGithub,
    faFlickr,
    faSoundcloud
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

export default function Footer() {
    return (
        <Card id="social" className="footer-card text-center">
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
    )
}
