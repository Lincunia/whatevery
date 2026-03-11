const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('<p style="background-color: #d7ffd1;">arre</p>');
});

const logRequest = (req, res, next) => {
  console.log(`Request made to ${req.url}`);
  next(); // Hand control to the next middleware
};


// Implement logRequest as middleware
app.get('/', logRequest, (req, res) => {
  res.send('Home Page');
});

app.use(express.static('previous_concepts')); 