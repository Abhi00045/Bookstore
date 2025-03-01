

const express = require('express')
const app = express()
const cors  = require('cors')
const env = require('dotenv')
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

//middle-ware 

app.use(cors());
app.use(express.json());

// let MONGOURL = process.env.MONGO_URL;

// mongoose.connect("mongodb://localhost:27017/book")
//   .then(()=>{
//     console.log("database connected successfully");
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`)
//     });
//   }).catch((error)=>{
//     console.log(error);
    
//   })

// //   const UserModel = mongoose.model("books");

// app.get('/getUsers', async(req, res) => {
//   const userData = await Books.find();
//   res.json(userData); 
// })

