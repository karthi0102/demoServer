const express = require('express')
const  dotenv = require('dotenv')
const cors = require('cors')
const ejsMate=require('ejs-mate')
const path = require('path')

const app = express()
app.use(cors())

app.engine('ejs',ejsMate);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));

dotenv.config()


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/data',(req,res)=>{
    let data= {
        name:"karthi",
        role:"developer",
        age:21
    }

    res.status(200).json(data)
})


app.get('*',(req,res)=>{
    res.status(400).send('<h1>Page not found</h1>')
})

const PORT = process.env.PORT || 3030

app.listen(PORT,()=>{
    console.log("Listening on PORT",PORT)
})
