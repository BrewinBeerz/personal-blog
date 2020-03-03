import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../blog/Blog.css";
import axios from "axios";
import { CardDeck } from "react-bootstrap";
import Posts from './Posts'

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(
      "http://localhost:8000/wp-json/wp/v2/posts?_embed"
    ).then(response => setPost(response.data));
  }, []);

  return (
    <div>
      <h2 style={{paddingBottom: '20px', paddingTop: '20px'}}>Posts</h2>
      <CardDeck className="blog-card-deck">
        {post
          .sort((a, b) => b.id - a.id)
          .map((post, index) => (
            <Posts key={index} index={index} post={post}></Posts>
          ))}
      </CardDeck>
    </div>
  );
}
