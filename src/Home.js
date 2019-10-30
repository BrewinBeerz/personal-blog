import React, { Component } from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardImg from "react-bootstrap/CardImg"
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
                <Carousel controls= {false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/IMG_0808.png"/>
                    </Carousel.Item>
                </Carousel>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>
                            <p>Hey, I'm Danny! I work in tech. My girlfriend and I recently moved to Phoenix, AZ.</p>
                            <p>Beer, BBQ and Bourbon are life! When we're not at home or with friends, we're out exploring our new surroundings out west! Traveling has been a big part of our lives and it's something I encourage everyone to do!</p>
                            <p>Anyway, I built this site as a web dev project to learn from and so that I could share some of the cool things I've picked up on over the years. From recipes to travel tips, there will be a little bit of everything on here. I hope you enjoy it!</p>
                            <p>P.S. Check out the social links below for more!</p>
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
                            <a id="links"  href="https://www.soundcloud.com" className="soundcloud social">
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