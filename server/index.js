

const express = require('express')
const app = express()
const cors  = require('cors')
const env = require('dotenv')
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

//middle-ware 

app.use(cors({origin: "http://localhost:5173/get"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


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

  // fetching data
  app.get('/get', async(req,res)=>{
    const allBooks = await Books.find();
    res.json(allBooks);
  });

  // uploading data using POST
  // app.post('/post', async(req,res)=>{
  //   const data = req.body;
  //   const result = await allBooks.insertOne(data);
  //   res.send(result);
  // });

async function startServer() {
  await mongoose.connect("mongodb://localhost:27017/Book").then(() => {
  console.log("DB is connected");
}).catch((error) => {
  console.log("something went wrong")
})
}
    app.listen(port,()=> console.log("server started "+  port));   
startServer();