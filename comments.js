// Create web server 
// 1. Create a web server
// 2. Create a route for the root path
// 3. Create a route for the /comments path
// 4. Create a route for the /comments/new path
// 5. Create a route for the /comments/:id path
// 6. Create a route for the /comments/:id/edit path
// 7. Create a route for the /comments/:id/delete path

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var comments = [
  { id: 1, author: 'John Doe', text: 'This is a comment' },
  { id: 2, author: 'Jane Doe', text: 'This is another comment' }
];

var commentCount = 2;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var newComment = {
    id: ++commentCount,