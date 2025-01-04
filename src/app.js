const express = require("express")
const cors = require("cors");
const app = express()
const appRouter = require("./Routers/appRouter");

//cors for client site to send request to server.
const corsOptions = {
    origin: "http://localhost:3000`",
    methods: "GET, POST, PATCH, DELETE, HEAD",
    credentials: true,
};


app.use(express.json());
app.use(appRouter);
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`listening at PORT ${PORT}`);
})