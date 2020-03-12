import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css";
import axios from "axios";
import Posts from "./Posts";

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then(response => setPost(response.data));
  }, []);

  return (
    <div>
      <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>Posts</h2>
      <div className="blog-container">
        {post
          .sort((a, b) => a.id - b.id)
          .map((post, index) => (
            <Posts key={index} index={index} post={post}></Posts>
          ))}
      </div>
    </div>
  );
}
