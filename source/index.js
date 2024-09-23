import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('*', (req, res) => {
    res.send("Not found!");
})

app.listen(4000, () =>{
    console.log("Server is running on port 4000");
})