const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors({
    origin: '*'
}))
app.use(express.json())

require('./src/routes/main.routes')(app);

app.listen(port)