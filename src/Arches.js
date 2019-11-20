import React, { Component, useState, useCallback } from "react";
import './Album.css'
import Gallery from 'react-grid-gallery';

const photos = [
  {
    src: './arches_card.jpg',
    thumbnail: './arches_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Delicate Arch at Arches National Park"
  },
  {
    src: './canyonlands_card.jpg',
    thumbnail: './canyonlands_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Mesa Arch at Canyonlands National Park"
  },
  {
    src: './grandcanyon_card.jpg',
    thumbnail: './grandcanyon_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Grand Canyon National Park"
  },
  {
    src: './arches_card.jpg',
    thumbnail: './arches_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Delicate Arch at Arches National Park"
  },
  {
    src: './grandcanyon_card.jpg',
    thumbnail: './grandcanyon_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: './canyonlands_card.jpg',
    thumbnail: './canyonlands_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: './arches_card.jpg',
    thumbnail: './arches_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: './canyonlands_card.jpg',
    thumbnail: './canyonlands_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: './grandcanyon_card.jpg',
    thumbnail: './grandcanyon_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: './arches_card.jpg',
    thumbnail: './arches_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: './canyonlands_card.jpg',
    thumbnail: './canyonlands_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: './grandcanyon_card.jpg',
    thumbnail: './grandcanyon_card.jpg',
    thumbnailWidth: 720,
    thumbnailHeight: 212
  },
  {
    src: './arches_card.jpg',
    thumbnail: './arches_card.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  }
];

class Arches extends Component {

  render() {
    return (
      <div>
        <h2>Arches National Park</h2>
        <Gallery 
        images = { photos }
        enableImageSelection = { false }/>      
      </div>
    );
  }
}
 
export default Arches;