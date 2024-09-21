const mongoose = require('mongoose');

require('dotenv').config() 
// once we add config method know all env variables are accessible through dotenv.

mongoose.connect(process.env.DB_CONNECTION_URL)
.then(()=> console.log("database connected successfully"))
.catch((err) => console.log('Error while connecting to database'))