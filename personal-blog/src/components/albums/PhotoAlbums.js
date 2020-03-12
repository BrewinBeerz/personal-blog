import React from "react";
import { Link } from "react-router-dom";

export default function PhotoAlbums(props) {
  const { album } = props;

  let title = album.title._content;
  let dateUpdate = album.date_update;
  let convertedDate = new Date(dateUpdate * 1000).toLocaleString();
  let albumCover = album.primary_photo_extras.url_m;
  let photoCount = album.photos;
  let id = album.id;

  return (
    <div>
      {album ? (
        <div className="photo-album-card">
          <Link to={`/albums/${id}`}>
            <img
              src={albumCover}
              className="photo-album-image"
            ></img>
          </Link>
          <div className="photo-album-card-body">
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <h6 dangerouslySetInnerHTML={{ __html: photoCount + " photos" }} />
            <p className="text-muted">{"Last Updated: " + convertedDate}</p>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}
