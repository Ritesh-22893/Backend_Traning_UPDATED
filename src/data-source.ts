import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employe } from "./entity/employe"
import { Student } from "./entity/student"
import { Teacher } from "./entity/teacher"
import { newUser } from "./entity/newUser"
import { library } from "./entity/library"

export const AppDataSource = new DataSource({
    type: "postgres",
    // host: "localhost",
    // port: 3306,
    // username: "root",
    // password: "ritesh22893",
    // database: "training",

    url: "postgres://default:q1dcrDeEUsw8@ep-empty-sky-a4oa1kv8-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    synchronize: true,
    logging: false,
    entities: [User, employe, Student, Teacher, newUser, library],
    migrations: [],
    subscribers: [],
})
