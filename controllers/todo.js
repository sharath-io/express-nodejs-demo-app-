const Todo = require('../models/todo')

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.send(todos);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
};

const addTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send();
    }
}


const updateTodo = async (req, res) => {
    try {
        const isValidId = await Todo.findById(req.params.id);
        if(!isValidId){
            return res.status(400).send('Please enter valid Todo Id')
        }
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.send(updatedTodo);
    } catch (e) {
        res.status(500).send();
    }
}


const deleteTodo = async (req,res) =>{
    try {
        // if document does not exist => retuns  null
        const isValidId = await Todo.findById(req.params.id);
        if(!isValidId){
            return res.status(400).send('Please enter valid Todo Id')
        }
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.send(deletedTodo);    
    } catch (e) {
        console.log(e); 
        res.status(500).send();
    }
}






module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}