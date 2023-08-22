const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

require('dotenv').config();

require("./config/database.js");

const cors = require("cors");
app.use(cors());

app.use(express.json());

const routes = require("./routers/index.js");
// use express router to handle API routes
const router = express.Router();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

