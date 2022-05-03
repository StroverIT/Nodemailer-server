require("dotenv").config();

const express = require("express")
const http = require("http")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const sendEmail = require("./utils/email.js")

const app = express()

const port = process.env.PORT || 8080
const server = http.createServer(app)

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
  res.render(path.resolve("views/index.ejs"))
})

app.post("/contactUs", async (req, res, next) => {  
    try{
      console.log(req.body);
    const message = `от ${req.body.user} - ${req.body.message}`
      await sendEmail( req.body.email, "emilzlatinov123@gmail.com", req.body.subject , message)
    res.send({messageEn: "You have successfully sent the email"})

    }catch(e){
      if(e) console.log(e);
    res.send({messageEn: "Something went wrong!"})

    }
  });

server.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`)
})
