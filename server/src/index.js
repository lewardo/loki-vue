const express = require('express')
const morgan = require('morgan')

const path = require('path')

const config = require('./config')
const router = require('./routes')

const app = express().use(morgan('combined'))

router.route(app)

app.use(express.static(path.join(__dirname, '../../', 'client/dist')))
  .listen(config.port, console.log(`listening on port ${ config.port }`))
