import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Posts(props) {
  const { post } = props;

  let id = post.id;
  let title = post.title.rendered;
  let excerpt = post.excerpt.rendered.toString();
  let date = new Date(post.date).toDateString();

  let featuredImage;
  let getFeaturedImage = () => {
    if(post._embedded['wp:featuredmedia']){
      return featuredImage = post._embedded['wp:featuredmedia'][0].source_url
    }
    else {
      return featuredImage = ''
    }
  }
  getFeaturedImage();
  console.log(featuredImage)

  return (
    <Card className="blog-card">
      <Link to={`/blog/postdetails/${id}`}>
        <Card.Img
          variant="top"
          src={featuredImage}
          className="blog-card-image"
        ></Card.Img>
      </Link>
      <Card.Body className="blog-card-body">
        <Card.Title>
          <p dangerouslySetInnerHTML={{ __html: title }} />
        </Card.Title>
        <Card.Text className="blog-card-text">
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="blog-card-footer">
        <small className="text-muted">{"Last Updated: " + date}</small>
      </Card.Footer>
    </Card>
  );
}
