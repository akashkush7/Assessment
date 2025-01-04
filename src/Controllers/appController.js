const fs = require("fs")
const path = require("path")

const dirName = path.join(__dirname, "../DB/appDB.json");

//Get all the tasks available in the tasklist
const getTasks = async (req, res) => {
    try {
        const data = fs.readFileSync(dirName, "utf-8");
        const taskList = await JSON.parse(data);
        res.status(200).json({ tasks: taskList.tasks });
    } catch (error) {
        console.error(error);
    }
}

//Get the single task from the Task list by specifying its id.
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data = fs.readFileSync(dirName, "utf-8");
        const taskList = await JSON.parse(data);
        const task = taskList["tasks"].filter((item) => {
            return item.id == id;
        })
        if (task.length == 1) {
            res.status(200).json({ task: task[0] });
        } else {
            res.status(500).json({ msg: "Internal Server Error" })
        }
    } catch (error) {
        console.error(error);
    }
}

//Generating a unique id for every task in tasklist.
const idGenerator = () => {
    let id = "";
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 100);
    }
    return id;
}

//To add a new Task
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (status == "pending" || status == "completed" || status == "in-progress" || status == undefined) {
            const data = fs.readFileSync(dirName, "utf-8");
            const taskList = await JSON.parse(data);
            const newData = {
                id: taskList["tasks"].length + idGenerator(),
                title: title,
                description: description,
                status: status ? status : "pending"
            }
            taskList.tasks.push(newData);
            var newData2 = JSON.stringify(taskList);
            fs.writeFileSync(dirName, newData2);
            res.status(200).json({ msg: "New task added" });
        } else {
            res.status(400).json({ msg: "Incorrect Status" });
        }
    } catch (error) {
        console.error(error);
    }
}

//To update the status of an already existing task.
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (status == "pending" || status == "completed" || status == "in-progress") {
            const data = fs.readFileSync(dirName, "utf-8");
            const taskList = await JSON.parse(data);
            const task = taskList["tasks"].filter((item) => {
                return item.id == id;
            })[0];
            task.status = status;
            const taskList2 = {
                tasks: taskList["tasks"].filter((item) => {
                    return item.id != id;
                })
            };
            taskList2.tasks.push(task)
            let newData = JSON.stringify(taskList2);
            fs.writeFileSync(dirName, newData);
            res.status(200).json({ msg: "Status updated Successfully" });
        } else {
            res.status(400).json({ msg: "Incorrect Status" });
        }
    } catch (error) {
        console.error(error);
    }
}

//To delete a task from an existing list of tasks.
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data = fs.readFileSync(dirName, "utf-8");
        const taskList = await JSON.parse(data);
        const taskList2 = {
            tasks: taskList["tasks"].filter((item) => {
                return item.id != id;
            })
        };
        let newData = JSON.stringify(taskList2);
        fs.writeFileSync(dirName, newData);
        res.status(200).json({ msg: "Task deleted Successfully" });
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };