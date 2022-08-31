import { DataSource } from "typeorm"

const DaemonDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 54321,
    username: "test",
    password: "test",
    database: "test",
})

export default DaemonDataSource