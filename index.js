const express = require('express');
const app = express();
const fs = require('fs');

app.get('/workers', (req, res) => {
  fs.readFile('./workers.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Iscilerin melumatlari oxuna bilmedi');
    } else {
      res.send(data);
    }
  });
});

const Host = 5000
app.listen(Host, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('localhost:' + Host)
    }
});