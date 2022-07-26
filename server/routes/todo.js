const express = require("express")
//initialize router
const router = express.Router()
//import all CRUD method from controller to endpoint (route)
const {getAllTodo, postCreateTodo, putUpdateTodo, deleteTodo} = require("../controllers/todo")

//define GET to read all todo
router.get("/", getAllTodo)

//define POST to create new todo
router.post("/", postCreateTodo)

//define PUT to update todo
router.put("/:id", putUpdateTodo)

//define DELETE to delete todo
router.delete("/:id", deleteTodo)

module.exports = router