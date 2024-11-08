import express from "express";
import "reflect-metadata";

import { AppDataSource } from "./database";
import router from "./routes";

const app = express()
const port = process.env.PORT || 4020

app.use(express.json())
app.use('/', router)

async function main() {
    await AppDataSource.initialize();
    console.log('Conexion establecida con la base de datos');

    app.listen(port, () => {
        console.log(`Servidor a su servicio en el puerto ${port}`)
    })
} main()