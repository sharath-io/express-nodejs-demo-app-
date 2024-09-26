const express = require('express');
require('./db');
// importing routes
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 3030

const app = express();

app.use(express.json());


app.use('/api/todos', todoRoutes)

app.listen(PORT, ()=>{
    console.log(`Express server started  on port ${PORT}`)
})