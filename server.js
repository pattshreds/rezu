const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/somedata', (req, res) => {
  res.send('this is your information')
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
