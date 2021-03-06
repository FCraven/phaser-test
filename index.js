const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=> {
  res.sendFile('index.html')
})


app.listen(PORT, ()=> {
  console.log(`Server listening on localhost:${PORT}`)
})
