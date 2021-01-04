const express = require("express")
const server = express()
const cors = require("cors")

server.use(cors())

const port = process.env.PORT || 3001


server.use(require('./routes/index'))


server.listen(port, () => {
    console.log(`Server on : ${port}`)
})
