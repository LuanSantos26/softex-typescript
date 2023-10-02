import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "luan",
    password: "luan123",
    database: "api-softex",
})
