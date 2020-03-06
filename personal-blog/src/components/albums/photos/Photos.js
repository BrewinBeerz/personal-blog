import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Photos(props) {
  const { album } = props;

  let id = album.id;
  let title = album.title._content;
  let dateUpdate = album.date_update
  let convertedDate = new Date(dateUpdate * 1000).toLocaleString()
  let albumCover = album.primary_photo_extras.url_m
  let photoCount = album.photos;

  return (
    <Card className="albums-card">
      <Link to="#">
        <Card.Img
          variant="top"
          src={albumCover}
          className="albums-card-image"
        ></Card.Img>
      </Link>
      <Card.Body className="albums-card-body">
        <Card.Title>
          <p dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: photoCount + ' photos' }} />
        </Card.Title>
      </Card.Body>
      <Card.Footer className="albums-card-footer">
        <small className="text-muted">{"Last Updated: " + convertedDate}</small>
      </Card.Footer>
    </Card>
  );
}
