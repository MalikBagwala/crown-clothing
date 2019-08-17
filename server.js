const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('hey guys');
});
