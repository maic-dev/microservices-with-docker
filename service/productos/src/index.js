import express from "express";

import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 4010

app.use(express.json())

app.use('/', router)

app.listen(port, () => {
    console.log(`Servidor a su servicio en el puerto ${port}`);
})