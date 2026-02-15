
// require('dotenv').config({path: './env'})

import app from './app.js'
import connectDB from './db/index.js'

import dotenv from 'dotenv'
dotenv.config({ path: './env' })


connectDB()
.then(()=>{
    
    app.on("error", (error)=>{
        console.log("ERROR", error)
        throw error
    })

    app.listen(process.env.PORT || 8000, () =>{

        console.log(`server is running at port : ${process.env.PORT}`);
    } )
})
.catch((err)=> {
    console.log("Mongo db connection failed !!!", err);
})


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