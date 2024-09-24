const express = require('express');
require('./db');
// importing routes
const todoRoutes = require('./routes/todo')

const app = express();

// const todo = new Todo({
//     title: ' Fourth ',
//     status: 'completed'
// })

// todo.save();

app.use('/api/todos', todoRoutes)

app.listen(3000, ()=>{
    console.log('Express server started')
})