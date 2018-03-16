const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const theThings = [1, 'Todd', 'Bob Ross']

app.get('/api/gatt', (req, res) => {
  console.log('made it');
  res.status(200).send(theThings)
})

app.post('/api/gatt/:ssn', (req, res) => {
  console.log(req.body)
  console.log(req.params);
  res.status(200).send()
})

app.listen(3005, () => {
  console.log('Ship docked at port 3005')
})