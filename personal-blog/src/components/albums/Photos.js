import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Photos() {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/albums/details/${id}`)
      .then(response => setPhotos(response.data.photoset));
  }, []);

  const { title } = photos;

  return (
    <div>
      { photos ? <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>{title}</h2> : 'Loading...'}
      <hr/>
    </div>
  );
}
