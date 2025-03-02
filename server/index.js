

const express = require('express')
const app = express()
const cors  = require('cors')
const env = require('dotenv')
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

//middle-ware 

app.use(cors({origin: "http://localhost:5173/"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// //   const UserModel = mongoose.model("books");

// app.get('/getUsers', async(req, res) => {
//   const userData = await Books.find();
//   res.json(userData); 
// })

//schema

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: [4, "Title should be atleast 4 characters"],
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
  });

  const Books = mongoose.model("books", BookSchema);

  app.get('/get', async(req,res)=>{
    const allBooks = await Books.find();
    res.json(allBooks);
  });

async function startServer() {
    try{
        await mongoose.connect("mongodb://localhost:27017/book");
           app.listen(port,()=> console.log("server started"+  port));   
       }catch(error){
           console.log(error);
           
       }
}
startServer();