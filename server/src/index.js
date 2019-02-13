const express = require('express')
const app = express()
const port = 3000

const Space = require('../models/space')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/spaces', (req, res) => {
  Space.findAll().then(space => {
    res.send(space)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
