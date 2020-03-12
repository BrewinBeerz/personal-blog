import React from "react";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const { post } = props;

  let id = post.id;
  let title = post.title.rendered;
  let excerpt = post.excerpt.rendered.toString();
  let date = new Date(post.date).toDateString();

  let featuredImage;
  let getFeaturedImage = () => {
    if (post._embedded["wp:featuredmedia"]) {
      return (featuredImage = post._embedded["wp:featuredmedia"][0].source_url);
    } else {
      return (featuredImage = "");
    }
  };
  getFeaturedImage();

  return (
    <div className="blog-card">
      <Link to={`/blog/postdetails/${id}`}>
        <img src={featuredImage} className="blog-card-image"></img>
      </Link>
      <div className="blog-card-body">
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
        <h6 dangerouslySetInnerHTML={{ __html: excerpt }} />
        <p className="text-muted">{"Last Updated: " + date}</p>
      </div>
    </div>
  );
}
