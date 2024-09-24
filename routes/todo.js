const  express = require('express')
const { addTodo, getTodos } = require('../controllers/todo');

const Router = express.Router();

Router.get('/', getTodos);

Router.post('/', addTodo)

module.exports = Router;