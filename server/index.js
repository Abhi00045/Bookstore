const express = require('express')
const app = express()
const cors  = require('cors')
const port = process.env.port || 5190

//midddleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})