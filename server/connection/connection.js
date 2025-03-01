// import "dotenv/config";
import mongoose from "mongoose";
import Books from "../models/bookModel";

export async function startServer() {
    mongoose.connect("mongodb://localhost:27017/book")
  .then(()=>{
    console.log("database connected successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  }).catch((error)=>{
    console.log(error);
    
  })

  app.get('/getUsers', async(req, res) => {
    const userData = await Books.find();
    res.json(userData); 
  })
}

startServer();
//   const UserModel = mongoose.model("books");