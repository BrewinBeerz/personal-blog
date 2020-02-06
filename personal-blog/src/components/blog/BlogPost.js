import React from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

const BlogPost = () => {
  let location = useLocation();

  let blogTitle = location.state.title.rendered;
  let blogDate = new Date(location.state.date).toDateString();
  let blogContent = location.state.content.rendered;

  return (
    <div>
      <h2>Blog Post</h2>
      <table style={{marginTop: '30px', fontFamily: 'Inconsolata'}}>
        <tr>
          <th>
            <h3 dangerouslySetInnerHTML={{ __html: blogTitle }} />
          </th>
        </tr>
        <tr>
          <th style={{paddingBottom: '20px', fontWeight: '300'}}>{blogDate}</th>
        </tr>
        <tr>
          <th style={{paddingBottom: '30px'}} >
            <h5 dangerouslySetInnerHTML={{ __html: blogContent }} />
          </th>
        </tr>
      </table>

      <p style={{ textAlign: "center", color: 'Blue !important' }}>
        <Link to="/Blog">Back</Link>
      </p>
    </div>
  );
};

export default BlogPost;
