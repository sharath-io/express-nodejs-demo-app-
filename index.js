const express = require('express');
const path = require('path'); // node js module => no need to install

const app = express();

const publicPath = path.join(__dirname, 'public')
// app.use((req,res,next) =>{
//     res.status(503).send('<h1>Site under maintenance</h1>')
//    })



// app.use(express.static(publicPath));

app.use((req,res,next) =>{
    console.log(req.url,req.method);
    next();
})

const users =[
    {
        name: 'Mike',
        age:30
    },
    {
        name: 'Nolan',
        age:50
    }
]

app.get('/users', (req,res)=> {
    console.log('from console',req.url, req.body)
    res.json( users)
 })

 app.get('/mike', (req,res)=> {
    res.send('Hello Mike')
 })

//  app.get('*', (req,res)=> {
//     res.status(404).send('<h1>Page not found <a href="/">Home Page</a></h1>');
//  })


app.get('*', (req,res)=> {
    const filePath = path.join(__dirname,'public','404.html')
    res.sendFile(filePath);
 })

//  app.get('*', (req,res)=> {
//     const filePath = path.join(__dirname,'public', '..', 'NotFound.html')
//     res.sendFile(filePath);
//  })

app.listen(3000, ()=>{
    console.log('Express server started')
})