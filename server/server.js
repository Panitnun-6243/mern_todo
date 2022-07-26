const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
//import cors ไว้ใช้อนุญาติการเรียกใช้ api จาก client (react)
const cors = require("cors")

//import endpoint to server.js by create to object and use it
const todo = require("./routes/todo")

//import connectDB function from config.js
require("dotenv").config()
const connectDB = require("./config/config")
connectDB()

//ใช้งาน cors
app.use(cors({origin: true, credentials: true}))

//สร้าง middileware
app.use(express.json({ extended: false}))
app.get("/", (req, res)=>{
    res.send("Server up and running")
})

//ใช้งาน routes
app.use("/api/todo", todo)

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})