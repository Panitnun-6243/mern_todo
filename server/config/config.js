const mongoose = require("mongoose")
//connect db with mongo url in .env
const db = process.env.MONGO_URL

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB is connected")
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB