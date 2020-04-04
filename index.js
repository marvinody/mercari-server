const express = require('express')
const mercari = require('mercari')
const path = require('path')

const app = express()

const index = path.join(__dirname, 'index.html')
app.get('/', (req, res, next) => {
  res.sendFile(index)
})

app.get('/api', (req, res, next) => {
  res.sendFile(index)
})

app.get('/api/search', (req, res, next) => {
  res.status(404).json({
    error: 'Not a valid endpoint, try supplying a search query!'
  })
})

app.get('/api/search/:query', async (req, res, next) => {
  const results = await mercari.search(req.params.query)
  res.json(results)
})


const port = process.env.PORT || 2038
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
