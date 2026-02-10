
// require('dotenv').config({path: './env'})

import connectDB from './db/index.js'

import dotenv from 'dotenv'
dotenv.config({ path: './env' })


connectDB();


// import express from "express"
// const app = express()

// function connectDB(){

// }
// connectDB()
 
// ifi approach
// semi colon is only for cleaning purpose
/*
;( async () => {

try{

await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)

app.on("error",(error)=>{
    console.log("error", error);
    throw error
})

app.listen(process.env.port,()=> {
    console.log(`app is listen on port ${process.env.port}`);
})

} catch(error) {
    console.log("ERROR", error)
    throw err 
}

} ) ()*/