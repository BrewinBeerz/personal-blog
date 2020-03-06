const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controllers/controller')

// Set variables
var ip, port, htmlDIR, staticDIR

// Express uses bodyParser for post/update requests
app.use(bodyParser.json());

// Set healthcheck URL for readiness
app.get('/health', (req, res) => res.send(200));

// Set express server settings for dev
port = 4000;
htmlDIR = path.join(__dirname, '../build/index.html');
staticDIR = path.join(__dirname, '../build/');
http.createServer(app).listen(port, () => console.log(`Server listening on port ${port}!`))


// Express returns path for home and static content
app.get('/', function(req, res){
    res.sendFile(htmlDIR);
})
app.use(express.static(staticDIR))

// GET Requests
app.get('/api/posts', controller.getPosts);
app.get('/api/posts/details/:id', controller.getPostDetails)
app.get('/api/albums', controller.getAlbums)

