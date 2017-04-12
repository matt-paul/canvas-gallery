const express = require('express');
const app = express();
const bodyParser = require('body-parser');

class Picture {
  constructor(name, width = 100, height = 100) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
}
const pictures = [];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pictures', (req, res) => {
  res.send(pictures);
})

app.get('/picture/picture-here', (req, res) => {
  res.send('endpoint for each picture');
})

app.post('/new', (req, res) => {
  const { name, width, height } = req.body;
  const p = new Picture(name, width, height);
  pictures.push(p);
  res.status(201).location('/pictures/' + p.height).json(p);
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
