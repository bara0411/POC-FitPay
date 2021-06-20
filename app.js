require('./src/config/config')
require('./src/helper/db')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const Route = require('./src/routes/apiRoute')

var app = express()

// middleware
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cors())
app.use('/api', Route)


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`))
