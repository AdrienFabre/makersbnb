const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const Space = require('../controllers/spaces')

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/spaces', (req, res) => {
  Space.list(res)
})

app.post('/api/spaces/create', (req, res) => {
  Space.create(req, res)
})

app.patch('/api/spaces/:id/update', (req, res) => {
  Space.update(req, res)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
