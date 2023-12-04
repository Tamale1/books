import express from 'express'
import { PORT, DB_STRING } from './config.js';
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'



const app = express()

//middleware for parsing requestbody
app.use(express.json())
app.use(cors());



app.get('/', (req, res)=>{
console.log(req);
return res.status(234).send('welcom to my book store')
})
//this simply means every route with the prefix of book handle it with the middle ware below
app.use('/books',booksRoutes)


 
mongoose
.connect(DB_STRING)
.then(()=>{ 
    console.log('Database connected');
    app.listen(PORT, ()=>{console.log(`App running on port: ${PORT} you better catch it`);})
})
.catch((error)=>{
    console.error(error);

})
