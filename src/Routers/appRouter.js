const express = require("express")
const router = express.Router();
const { getTasks, createTask, getTask, updateTask, deleteTask } = require("../Controllers/appController")

router.route("/tasks").get(getTasks);
router.route("/tasks/:id").get(getTask);
router.route("/tasks/:id").put(updateTask);
router.route("/tasks/:id").delete(deleteTask);
router.route("/tasks").post(createTask);

module.exports = router;