const express = require('express')
require('./mongooseconnect')


const userouter = require("./routes")

const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())



app.use(userouter)

app.listen(4000)