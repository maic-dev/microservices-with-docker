import express from "express";
import cors from "cors";

import route from "./src/api.routes.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api', route)

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('*', (req, res) => {
    res.send("Not found!");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})