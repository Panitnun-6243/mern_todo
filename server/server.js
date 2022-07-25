const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

//สร้าง middileware
app.use(express.json({ extended: false}))
app.get("/", (req, res)=>{
    res.send("Server up and running")
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})