import express from "express"
import http from "http"

const app = express()
const port = process.env.PORT || 8080
const server = http.createServer(app)

server.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`)
})
