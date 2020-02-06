import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
  const [blogDetails, setBlogDetails] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/posts/${id}`)
      .then(response => setBlogDetails(response.data));
  }, []);

  function getBlogDetails(setBlogDetails) {
    if (blogDetails.length > 0) {
        console.log(blogDetails.length)
      return <div>Does Stuff</div>;
    } else {
        console.log('else', blogDetails.length)
      return <div>Nope</div>;
    }
  }

  return (
    <div>
      <h1>Post Details</h1>
      {getBlogDetails()}
    </div>
  );
}
