const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 4000

const app = express()

// Middleware
app.use(cors())
app.use(morgan('dev'))

// Router Files


// Routes
app.get('/api/test', (req, res, next) => {
     res.json({
	message: 'Route working'
     })
     // const error = new Error('it died')
     // next(error)
})

// Error Handling
//Impletement: https://github.com/justsml/guides/blob/master/express/setup-guide/app.js
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(PORT, () => {
     console.log(`Server running on port: ${PORT}`)
})
