const axios = require('axios')
require('dotenv').config();

var token = process.env.TOKEN;

var flickrToken = process.env.FLICKRTOKEN;
var flickerUser = process.env.FLICKRUSER;

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
    let id = req.params.id
    axios
      .get(
        `http://localhost:8000/wp-json/wp/v2/posts/${id}?_embed`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => res.status(400).send(err.message));
  },
  getAlbums: (req, res) => {
    console.log("getAlbums");
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${flickrToken}&user_id=${flickerUser}&format=json&nojsoncallback=1&primary_photo_extras=url_m`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => res.status(400).send(err.message));
  },
  getAlbumsPhotos: (req, res) => {
    console.log("getAlbumsPhotos");
    let photosetID = req.params.id
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickrToken}&photoset_id=${photosetID}&user_id=${flickerUser}&format=json&nojsoncallback=1&extras=url_s,url_m,url_t,url_o`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => res.status(400).send(err.message));
  }
};
