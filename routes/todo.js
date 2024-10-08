const  express = require('express')
const { addTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todo');

const Router = express.Router();

Router.get('/', getTodos);

Router.post('/', addTodo);

Router.patch('/:id', updateTodo);

Router.delete('/:id', deleteTodo);

module.exports = Router;