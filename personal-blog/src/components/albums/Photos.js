import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./photos.css";
import Modal from "./Modal";

export default function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const [imgURL, setImgURL] = useState([]);

  const handleShow = (e) => {
    setShow(true)
    setImgURL(e.target.src)
    console.log(e.target.src)
  }

  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get(`/api/albums/details/${id}`)
      .then(response => setPhotos(response.data.photoset));
  }, []);

  const { title, photo } = photos;

  return (
    <div>
      {photos ? (
        <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>{title}</h2>
      ) : (
        "Loading..."
      )}
      <hr />
      <div className="image-grid-container">
        {photo
          ? photo
              .sort((a, b) => b.id - a.id)
              .map((pic, index) => (
                <img
                  id='image'
                  index={index}
                  className="images"
                  onClick={handleShow}
                  src={`${pic.url_m}`}
                ></img>
              ))
          : "Loading..."}
      </div>
      <Modal show={show} handleClose={handleClose} src={imgURL}/>
    </div>
  );
}
