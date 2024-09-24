const Todo = require('../models/todo')

const getTodos = (req,res) =>{
    Todo.find({})
    .then(result => res.send(result))
    .catch(e => console.log(e))
};

const addTodo = (re,res) =>{}

module.exports ={
    getTodos,
    addTodo
}