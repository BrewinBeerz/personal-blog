import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './post-details.css'
import axios from "axios";

export default function PostDetails() {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/posts/details/${id}`)
      .then(response => setDetails(response.data));
  }, []);

  const { title, content, date } = details;

  let blogDate = new Date(date).toDateString();

  return (
    <Container className="post-container"> 
      <div className="post">
        <h2
          dangerouslySetInnerHTML={{
            __html: details.title ? details.title.rendered : "Loading..."
          }}
        />
        <h6>{blogDate}</h6>
        <hr/>
        <br/>
        <h5
          dangerouslySetInnerHTML={{
            __html: details.content ? details.content.rendered : "Loading..."
          }}
        />
      </div>
      <Link to='/blog'><Button variant="outline-light" className="back-button" style={{margin: '0 auto', display: 'block'}}>Back</Button></Link>
    </Container>
  );
}
