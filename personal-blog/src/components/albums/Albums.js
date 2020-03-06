import React, { useState, useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import Photos from "./photos/Photos";
import axios from "axios";
import './albums.css'

export default function Albums() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    axios.get("/api/albums").then(response => setAlbum(response.data.photosets.photoset));
  }, []);

  return (
    <div className="albums-container">
      <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>Albums</h2>
      <CardDeck className="albums-card-deck">
      {album
          .sort((a, b) => a.id - b.id)
          .map((album, index) => (
            <Photos key={index} index={index} album={album}></Photos>
          ))}
      </CardDeck>
    </div>
  );
}
