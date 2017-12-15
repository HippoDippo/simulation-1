const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const productCtrl = require('./productControllers');
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const app = express();

massive(CONNECTION_STRING)
  .then(db => app.set('db', db));

app.use(bodyParser.json());
app.use(cors());

app.get();

app.post();

app.put();

app.delete();

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
