import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './Routes/users.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", userRoutes)

app.get("/", (req, res)=>  res.send('hello world'))

app.listen(PORT, ()=>{
   console.log(`app is listening in  http://localhost:${PORT}`);
})