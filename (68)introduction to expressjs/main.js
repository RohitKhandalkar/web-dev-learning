// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//express js hello world code
 const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.put or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!200')
})
app.get('/about', (req, res) => {
  res.send('this is an express app')
})
app.get('/contact', (req, res) => {
  res.send('there is no contact')
})
app.get('/blog', (req, res) => {
  res.send('this is just a blog')
})
app.get('/blog/:slug', (req, res) => {
    //logic to fetch intro to js from the database(db)
    console.log(req.params.slug) 
    // console.log(req)
     console.log(req.params)//output: [Object: null prototype] { slug: 'what' }
     console.log(req.query)//output: 
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog/:slug/:second', (req, res) => {  
//     //logic to fetch intro to js from the database(db)
//   res.send(`hello ${req.params.slug}and ${req.params.second}`)
// })

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the database(db)
//   res.send('introduction to js')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to from from the database(db)
//   res.send('introduction to python')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
