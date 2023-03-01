require('dotenv').config()
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const Registration = require('./models/form')
const mongoose = require('mongoose')
const registerRouter = require('./routing/registration')

const app = express()


const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/register').then(()=>{
    console.log("Connection is established")
})

const staticPath =  path.join(__dirname, './public')
const viewPath = path.join(__dirname , './templates/views')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use('/form' ,registerRouter )
app.set('view engine' , 'ejs')
app.set('views' , viewPath)

app.get('/',(req,res)=>{
    res.render('register' , {
        name:"Form"
    })
})
app.get('/login',(req,res)=>{
    res.render('login'
)
})
app.post('/register' , async(req,res)=>{
    try{    
        let params = req.body 
        if(params.password === params.cpassword)
        {
            let info = new Registration()
            info.name = params.name;
            info.email = params.email;
            info.password = params.password;
            info.cpassword = params.cpassword;
            
const doc = await info.save()
console.log(doc)
            res.status(200).json(info)
        }
        else{
            res.json({message:'password are not matching'})
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:'ok'})
    }
})
app.post('/login' , async(req,res)=>{
    try{    
        let params = req.body 
        if(params.password === params.cpassword)
        {
            let info = new Registration()
            info.name = params.name;
            info.email = params.email;
            info.password = params.password;
            info.cpassword = params.cpassword;
            
const doc = await info.save()
console.log(doc)
            res.status(200).json(info)
        }
        else{
            res.json({message:'password are not matching'})
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:'ok'})
    }
})


app.listen(port , ()=>{
    console.log(`App listening to the port ${port}`)
})

