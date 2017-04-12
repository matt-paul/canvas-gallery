const express = require('express');
const app = express();

const mockPictures = [
  {
    name: 'First picture',
    height: 100,
    width: 100,
    pixels: []
  },
  {
    name: 'Second picture',
    height: 40,
    width: 40,
    pixels: []
  }
]

const pictures = mockPictures;

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
  res.send('This is going to post a picture object')
  // Instantiate the picture class, and then push to the pictures array
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
