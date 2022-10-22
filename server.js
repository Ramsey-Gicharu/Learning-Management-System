var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//setting up the css file for the app
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// adminPage
app.get('/', function(req, res) {
  res.render('pages/adminPage');
});

// userPage
app.get('/User', function(req, res) {
  res.render("pages/userView", {
        user: "John Doe",
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');