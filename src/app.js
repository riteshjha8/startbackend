import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//when you use middleware or any configuration setting  most of the time you work through app.use

app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes  Import
import userRouter from './routes/user.routes.js'

// routes declaration 
app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/users/register
export default app

