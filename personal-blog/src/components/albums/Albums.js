import React, { useState, useEffect } from "react";
import PhotosAlbums from "./PhotoAlbums";
import axios from "axios";
import "./albums.css";

export default function Albums() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    axios
      .get("/api/albums")
      .then(response => setAlbum(response.data.photosets.photoset));
  }, []);

  return (
    <div>
      <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>Albums</h2>
      <div className="albums-container">
        {album
          .sort((a, b) => a.id - b.id)
          .map((album, index) => (
            <PhotosAlbums
              key={index}
              index={index}
              album={album}
            ></PhotosAlbums>
          ))}
      </div>
    </div>
  );
}
