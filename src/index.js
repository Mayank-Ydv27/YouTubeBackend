
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed", err);
})




/*
import mongoose from "mongoose";
import express from "express";

const app = express()

const connect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERR: ", error);
            throw error
        })

        app.listen(8000, ()=>{
            console.log(`App is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: " , error)
        throw error
    }
};

connect();
*/







