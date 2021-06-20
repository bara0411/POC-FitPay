require('./src/config/config')
require('./src/helper/db')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const port  = process.env.PORT

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
app.listen(port, () => console.log(`Server started at port : ${port}`))
