import React, { Component } from "react";
//import Carousel from "react-bootstrap/Carousel"
import Gallery from "react-photo-gallery"
import './Album.css'

const photos = [
  {
    src: './arches_card.jpg',
    width: 4,
    height: 3
  },
  {
    src: './canyonlands_card.jpg',
    width: 3,
    height: 4
  },
  {
    src: './grandcanyon_card.jpg',
    width: 4,
    height: 3
  },
  {
    src: './grandcanyon_card.jpg',
    width: 3,
    height: 4
  },
  {
    src: './canyonlands_card.jpg',
    width: 3,
    height: 4
  },
  {
    src: './grandcanyon_card.jpg',
    width: 4,
    height: 3
  }
];

class Arches extends Component {

  render() {
    return (
      /*
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./arches_card.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Arches National Park</h3>
              <p>Photo by Danny Squitin</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 b-"
              src="./canyonlands_card.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Canyonlands National Park</h3>
              <p>Photo by Danny Squitin</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./grandcanyon_card.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Grand Canyon National Park</h3>
              <p>Photo by Danny Squitin</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      */
      <div>
        <Gallery photos={photos} direction={"column"} />
      </div>
    );
  }
}
 
export default Arches;