import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../blog/Blog.css";
import Axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import ModalComp from "../modal/ModalComp";
import useModal from "../modal/useModal";
import { Link } from "react-router-dom";
import BlogPost from "../blog/blogPost/BlogPost"

export default function Blog() {
  const [post, setPost] = useState([]);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    let wordpress = Axios.get(
      "http://localhost:8000/wp-json/wp/v2/posts"
    ).then(response => setPost(response.data));
  }, []);


  function Post({ post, index }) {
    let title = post.title.rendered;
    let excerpt = post.excerpt.rendered.toString();
    let date = new Date(post.date).toDateString();
    let content = post.title.rendered;

    return (
      <Card className="blog-card">
        <Link to={{
          pathname: "/Blog-post",
          state: post
        }}>
          <Card.Img
            variant="top"
            src="/arches_card.jpg"
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



  return (
    <div>
      <h2>Blog</h2>
      <ModalComp isShowing={isShowing} hide={toggle} />
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
