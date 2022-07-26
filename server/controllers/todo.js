const Todo = require("../models/todo")

//define method for get all todo
exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message})
                )
}

//define method for create new todo
exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({message: "Create todo successfully", data}))
        .catch((err) =>
            res
                .status(400)
                .json({message: "Failed to add todo", error: err.message})
                )
}

//define method for update todo
exports.putUpdateTodo = (req,res) => {
    //req.body ตัวนี้คือค่าที่อัปเดตเเล้วส่งเข้ามา ส่วนid ก็idของtodoที่ต้องการอัปเดต
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({message: "Update todo successfully", data}))
        .catch((err) =>
            res
                .status(400)
                .json({message: "Failed to update todo", error: err.message})
                )
}

//define method for delete todo
exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({message: "Delete todo successfully", data}))
        .catch((err) =>
            res
                .status(404)
                .json({message: "Failed to delete todo", error: err.message})
                )
}