const express = require("express")
//initialize router
const router = express.Router()

//define GET to read all todo
router.get("/")

//define POST to create new todo
router.post("/")

//define PUT to update todo
router.put("/:id")

//define DELETE to delete todo
router.delete("/:id")

module.exports = router