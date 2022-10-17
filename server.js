const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const jsonParser = bodyParser.json();
const fileName = 'students.json';

// // Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);


// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('pages/homeAdmin');
});

// // link to add students page for admin on navbar
app.get('/addstudent', function(req, res) {
  res.render('pages/studentAdminLink');
});

// // link to add lecturers page for admin on navbar
app.get('/addlecturer', function(req, res) {
  res.render('pages/lecturersAdminLink');
});

// // link to add courses page for admin on navbar
app.get('/addcourse', function(req, res) {
  res.render('pages/coursesAdminLink');
});

//tried making the code write to json file failed

// // This is a RESTful GET web service
// app.get('/students', (request, response) => {
//     data.sort((a, b) => (a.name > b.name) ? 1 : -1 );
//     response.send(data);
// });

// // This is a RESTful POST web service
// app.post('/students', jsonParser, (request, response) => {
//     data.push(request.body);
//     fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
//     response.end();
// });



app.listen(8080);
console.log('Server is listening on port 8080');