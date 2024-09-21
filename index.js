const express = require('express');
const path = require('path'); // node js module => no need to install
require('./db');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath));

app.get('*', (req,res)=> {
    const filePath = path.join(__dirname,'public','404.html')
    res.sendFile(filePath);
 })

app.listen(3000, ()=>{
    console.log('Express server started')
})

// mongodb+srv://sharathroot:<db_password>@cluster0.tdnrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0