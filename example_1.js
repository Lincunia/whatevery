const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// REQUEST HANDLERS
app.get('/', (req, res) => {
    res.send("Hello, reader!"); // Client-side
    console.log("Hello, reader!"); // Server-side
});

// ROUTE PARAMETERS
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// QUERY PARAMETERS
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  const limit = req.query.limit;
  res.send(`Searching for "${searchTerm}" with a limit of ${limit} results.`);
});
