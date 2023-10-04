import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "luanzin",
    password: "luan2624",
    database: "api-softex3",
})

