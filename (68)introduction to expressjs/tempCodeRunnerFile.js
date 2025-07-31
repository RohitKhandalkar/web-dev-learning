app.get('/blog/:slug', (req, res) => {
    //logic to fetch intro to js from the database(db)
    console.log(req) 
  res.send(`hello ${req.params.slug}`)
})