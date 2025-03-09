import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_CONN,
    entities: [
        User
    ],
    synchronize: true,
    //logging: true
})