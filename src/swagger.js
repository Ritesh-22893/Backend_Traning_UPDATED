// import swaggerAutogen from 'swagger-autogen'
const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.3" })
const doc = {
    info: {
        title: 'API training',
        description: "Description"
    },
    components: {
        schemas: {
            studentSchema: {
                firstname: "Pikachu",
                lastname: "Pokemon",
                age: "13"
            },
            teacherSchema: {
                firstname: "Ash",
                lastname: "Catchum",
                age: "22"
            }
        },
        examples: {
            studentExample: {
                vlaue: {
                    firstname: "Pikachu",
                    lastname: "Pokemon",
                    age: "13"
                },
                summary: 'studentdata'
            },
            teacherExmple: {
                value: {
                    firstname: "Ash",
                    lastname: "Catchum",
                    age: "22"
                }
            }
        }
    },
    host: 'localhost:3000'
}
const outputfile = './swagger-outputfile.json'
const routes = ['./routes/student.routes.ts', './routes/teacher.routes.ts']


swaggerAutogen(outputfile, routes, doc)