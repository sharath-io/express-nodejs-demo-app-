//import mongoose library
const mongoose = require('mongoose');

const STATUSES = {
    NOT_STARTED: 'not-starrted',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
}

// schmea / structure of collection
// mongoose.Schema => is a method
// we need to pass an object which specifies datatypes
// and fields of that collection 
// here we have title field string, reuired(never be empty)
// status field => an object here
// in the status field we have properties such as 
// started, progress and completed => 
// this status field is not compulsory and has a default value
// all the avilable properties of mongoose can be found at schemas in mongoose docs
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true // trim property to remove begin & end spaces
  },
  status:{
    type: String,
    required: false,
    default: STATUSES.NOT_STARTED
  }
})

// then we can create a todo model
// start with capital letter
// first parameter => collection name => Todo
// second parameter => we need to provide schema for this 
// lets create schema/ structure of collection =>  called TodoSchema
// create schema and pass it as a second argument
const Todo = mongoose.model('Todo',TodoSchema );


// exporting this Todo model => so we can use this model in any other file
module.exports = Todo; 