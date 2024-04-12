import express from 'express';
import mongoose from 'mongoose';
import router from '../src/routes/BookRoutes.mjs';
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://sharadsingh0203:sharad%40%400209%40%400203@cluster0.xogxrhv.mongodb.net/BooksData").then(()=>console.log('Database Connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(9000,()=>{
    console.log('Server Started on port:',9000);
})