import express from 'express'
import ejs from 'ejs'
import knex from 'knex'
import multer from 'multer'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 2468

// Using Body Parser
app.use(bodyParser.json())
app.use(bodyParser({ extended: true }))

// Setup static folder
app.use('/static', express.static(process.cwd() + '/static'))

// Setup EJS 
app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/views')

// Running Server
app.listen(port, (e) => {
    console.log(`Server started on port: ${port}`)
})  