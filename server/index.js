const express = require('express')
const app = express()
const cors  = require('cors')
const env = require('dotenv')
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

//midddleware 
app.use(cors());
app.use(express.json());

let MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
  .then(()=>{
    console.log("database connected successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  }).catch((error)=>{
    console.log(error);
    
  })

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

