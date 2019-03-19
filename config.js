import knex from 'knex'

const db = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "eventory"
    }
})

export default db