const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const uuidV1 = require('uuid/v1');

class Picture {
  // constructor(name, width = 100, height = 100) {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.uuid = uuidV1();
  }
}
const pictures = [];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pictures', (req, res) => {
  res.send(pictures);
});

app.get('/picture/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  const pic = pictures.filter(picture => picture.uuid === uuid);
  res.send(pic);
});

app.post('/new', (req, res) => {
  const name = req.body.name;
  const height = req.body.height;
  const width = req.body.width
  const p = new Picture(name, height, width);
  pictures.push(p);
  res.status(201).location(`/pictures/${p.uid}`).json(p);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
