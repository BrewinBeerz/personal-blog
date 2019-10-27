import React, { Component, useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images";
import './Album.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  './arches_card.jpg',
  './canyonlands_card.jpg',
  './grandcanyon_card.jpg',
];

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
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <h2>Arches National Park</h2>
        <Gallery photos={photos} direction={"column"} onClick={() => this.setState({ isOpen: true })}/>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
 
export default Arches;