const mongoose = require("mongoose")
//create database schema
const TodoSchema = new mongoose.Schema({
    title: {
        type:"String",
        required: true
    },
    description: {
        type: "String",
    }
})
//create object model by using schema
const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo