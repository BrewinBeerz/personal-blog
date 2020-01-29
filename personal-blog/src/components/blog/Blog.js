import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../blog/Blog.css";
import Axios from "axios";
import { Card, CardDeck } from "react-bootstrap";

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let wordpress = Axios.get(
      "http://localhost:8000/wp-json/wp/v2/posts"
    ).then(response => setPost(response.data));
  }, []);

  function Post({ post, index }) {

    let title = post.title.rendered
    let excerpt = post.excerpt.rendered.toString();
    let date = new Date(post.date).toDateString();

    return (
      <Card className="blog-card">
        <Card.Img
          variant="top"
          src="/arches_card.jpg"
          className="blog-card-image"></Card.Img>
        <Card.Body className="blog-card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="blog-card-text">
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="blog-card-footer">
          <small className="text-muted">{"Last Updated: " + date}</small>
        </Card.Footer>
      </Card>
    );
  }

  return (
    <div>
      <h2>Blog</h2>
      <CardDeck className="blog-card-deck">
        {post
          .sort((a, b) => b.id - a.id)
          .map((post, index) => (
            <Post key={index} index={index} post={post}></Post>
          ))}
      </CardDeck>
    </div>
  );
}
