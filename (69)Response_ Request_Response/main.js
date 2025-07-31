const express = require('express')
const blog =require('./Routes/blog')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)

app.get('/', (req, res) => {
  console.log("hey its a getrequest")
  res.send('Hello World! postman')
}).post('/', (req, res) => {
  console.log("hey its a post request")
  res.send('Hello World! Post')
})
app.put('/', (req, res) => {
  console.log("hey its a put request")
  res.send('Hello World! Put')
})

app.get("/index",(req, res) => {
  console.log("hey its a index")
  res.sendFile('templates/index.html',{root: __dirname})
})

app.get("/api",(req, res) => {
  console.log("hey its api")
  res.json({a:1,b:2,c:3,d:4,name:["rohit","harry"]})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
