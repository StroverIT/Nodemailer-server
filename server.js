import express from "express"
import http from "http"

import {sendEmail} from "./utils/email.js"

const app = express()
const port = process.env.PORT || 8080
const server = http.createServer(app)

app.post("/contactUs", async (req, res, next) => {  
    try{
  
    const message = `от ${req.body.user} - ${req.body.message}`
      await sendEmail( req.body.email, "emilzlatinov123@gmail.com", req.body.problem , message)
    res.send({messageEN: "You have successfully sent the email"})
    }catch(e){
      if(e) console.log(e);
    res.send({messageEN: "Something went wrong!"})

    }
  });

server.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`)
})
