import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./photos.css";

export default function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`/api/albums/details/${id}`)
      .then(response => setPhotos(response.data.photoset));
  }, []);

  const { title, photo } = photos;

  let photoID;

  return (
    <div>
      {photos ? (
        <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>{title}</h2>
      ) : (
        "Loading..."
      )}
      <hr />
      <div className="image-grid-container">
        <div className="image-grid">
          {photo
            ? photo
                .sort((a, b) => b.id - a.id)
                .map((pic, index) => (
                  <div>
                    <img
                      index={index}
                      className="images"
                      onClick={handleShow}
                      src={`${pic.url_m}`}
                    ></img>
                  </div>
                ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
