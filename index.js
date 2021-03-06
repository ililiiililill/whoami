require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// enable CORS so API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// make publc static
app.use(express.static('public'));

// route /index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// whoami endpoint
app.use('/api/whoami', require('./routes/whoamiRoute'));

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('App is listening on port ' + listener.address().port);
});
