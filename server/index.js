

const express = require('express')
const app = express()
const cors  = require('cors')
const env = require('dotenv')
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

//middle-ware 

app.use(cors());
app.use(express.json());


// //   const UserModel = mongoose.model("books");

// app.get('/getUsers', async(req, res) => {
//   const userData = await Books.find();
//   res.json(userData); 
// })

async function startServer() {
    try{
        await mongoose.connect("mongodb://localhost:27017/book");
           app.listen(port,()=> console.log("server started"+port));
       }catch(error){
           console.log(error);
           
       }
}
startServer();
 