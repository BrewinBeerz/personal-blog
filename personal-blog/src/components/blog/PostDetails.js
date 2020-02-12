import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function PostDetails() {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/posts/${id}?_embed`)
      .then(response => setDetails(response.data));
  }, []);

  const { title, content, date } = details;

  let blogDate = new Date(date).toDateString();

  return (
    <div> 
      <div style={{ marginTop: "30px", fontFamily: "Inconsolata" }}>
        <h2
          style={{ textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html: details.title ? details.title.rendered : "Loading..."
          }}
        />
        <h6>{blogDate}</h6>
        <br />
        <h5 style={{paddingBottom: '20px'}}
          dangerouslySetInnerHTML={{
            __html: details.content ? details.content.rendered : "Loading..."
          }}
        />
      </div>
      <Link to='/blog'><Button variant="outline-dark" className="back-button" style={{margin: '0 auto', display: 'block'}}>Back</Button></Link>
    </div>
  );
}
