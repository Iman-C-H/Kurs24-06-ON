import express from 'express'
import cors from 'cors'
// import {todos} from './todos'
import fs from 'fs'

const server = express();
const PORT = 4000;

// const fs = require('./todos');
const jsonList = fs.readFileSync('todos.json', 'utf8');
const data = JSON.parse(jsonList);



// Middleware
server.use(cors());


server.get("/todos", (req, res) => {
    console.log("Ich bekomme ein Get")
    res.json(data)
})


console.log("Server Online")
server.listen(PORT)