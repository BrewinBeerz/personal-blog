const axios = require('axios')
require('dotenv').config();

var token = process.env.TOKEN;

var auth = {
  headers: {
    Authorization: "Bearer" + token
  }
};

module.exports = {
  //GET Requests
  getPosts: (req, res) => {
    console.log("getPosts");
    axios
      .get(
        'http://localhost:8000/wp-json/wp/v2/posts?_embed'
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => res.status(400).send(err.message));
  },
  getPostDetails: (req, res) => {
    console.log("getPostDetails");
    var id =req.params.id
    axios
      .get(
        `http://localhost:8000/wp-json/wp/v2/posts/${id}?_embed`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => res.status(400).send(err.message));
  }
};
