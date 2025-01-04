# To-Do List App Backend

This project is a backend service for managing a simple To-Do List application. It provides RESTful API endpoints to perform CRUD operations on tasks. Tasks are stored in a JSON file, making the app lightweight and easy to use.

## Features

- **Create Tasks**: Add new tasks with title, description, and status (default: "pending").
- **Fetch All Tasks**: Retrieve a list of all tasks.
- **Fetch a Task by ID**: Get details of a specific task using its ID.
- **Update Task Status**: Modify the status of a task (e.g., "pending," "in-progress," "completed").
- **Delete a Task**: Remove a task by its ID.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Framework for building REST APIs.
- **File System (fs)**: Used to read and write task data in a JSON file.

## API Endpoints

### 1. Get All Tasks
**GET /tasks**

- **Response**:
```json
{
  "tasks": [
    {
      "id": "unique-id",
      "title": "Task Title",
      "description": "Task Description",
      "status": "pending"
    }
  ]
}
```

### 2. Get Task by ID
**GET /tasks/:id**

- **Response** (if the task exists):
```json
{
  "task": {
    "id": "unique-id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
  }
}
```

- **Response** (if the task does not exist):
```json
{
  "msg": "Internal Server Error"
}
```

### 3. Create a Task
**POST /tasks**

- **Request Body**:
```json
{
  "title": "New Task Title",
  "description": "New Task Description",
  "status": "pending"
}
```

- **Response**:
```json
{
  "message": "Task created successfully",
}
```

### 4. Update Task Status
**PUT /tasks/:id**

- **Request Body**:
```json
{
  "status": "completed"
}
```

- **Response**:
```json
{
  "msg": "Status updated successfully",
}
```

### 5. Delete a Task
**DELETE /tasks/:id**

- **Response** (if the task exists):
```json
{
  "msg": "Task deleted successfully"
}
```

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/akashkush7/Assessment.git
   cd Assessment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   node src/app.js
   ```

4. **Test the Endpoints**:
   Use tools like **Postman** or **cURL** to interact with the API.

## File Structure

```
.
├── DB/appDB.json       # JSON file to store task data
├── app.js           # Main application entry point
├── Controllers/appController.js   # Controller functions for task operations
├── Routers/appRouter.js        # API route handlers
└── README.md        # Project documentation
```

## Error Handling

- **400 Bad Request**: Missing or invalid data in the request.
- **404 Not Found**: Task not found for the given ID.
- **500 Internal Server Error**: General server errors.

## Contact

For questions or suggestions, contact:
- **Email**: akashkushwaha060@gmail.com
- **GitHub**: [akashkush7](https://github.com/akashkush7)

