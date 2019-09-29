import React, { Component } from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardImg from "react-bootstrap/CardImg"
import {
    faYoutube,
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
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/IMG_0808.png" alt="First slide" />
                    </Carousel.Item>
                </Carousel>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>
                            <p>Hey, I'm Danny! I work in tech. I built this site so that I could share some cool things I've picked up my 31 years of life on this planet. My girlfriend and I recently moved from Atlanta, GA to Phoenix, AZ with our mini-zoo of dogs and cats. </p>
                            <p>Beer, BBQ and Bourbon are life! Nothing beats a relaxing Sunday afternoon with a nice bourbon and a cigar, tending to the  smoker. When we're not at home or with friends , we're out exploring our new surrounding out west!</p>
                        </Card.Text>
                    </Card.Body>
                    <CardImg className="ml-auto mr-auto" src="/IMG_4492.png" roundedCircle />
                </Card>
                <Card id="social" className="text-center">
                    <Card.Body>
                        <Card.Title>
                            <a id="links" href="https://www.facebook.com" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            </a>
                            <a id="links"  href="https://www.twitter.com" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </a>
                            <a id="links"  href="https://www.github.com" className="soundcloud social">
                                <FontAwesomeIcon icon={faSoundcloud} size="1x" />
                            </a>
                            <a id="links"  href="https://www.github.com" className="github social">
                                <FontAwesomeIcon icon={faGithub} size="1x" />
                            </a>
                            <a id="links"  href="https://www.flckr.com" className="flickr social">
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