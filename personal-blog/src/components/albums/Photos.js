import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import './photos.css';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const [imgURL, setImgURL] = useState([]);

  const handleShow = (e) => {
    setShow(true);
    setImgURL(e.target.src);
    console.log(e.target.src);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get(`/api/albums/details/${id}`)
      .then((response) => setPhotos(response.data.photoset));
  }, []);

  const { title, photo } = photos;

  let images = [];

  if (photo) {
    photo.map((picture) => {
      images.push({
        original: picture.url_o,
        thumbnail: picture.url_t,
        fullscreen: picture.url_o
      });
    });
  }

  console.log(images);

  return (
    <div>
      {photos ? (
        <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>{title}</h2>
      ) : (
        "Loading..."
      )}
      <hr />
      <div className="image-gallery-container">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
