const express = require('express')
const Registration = require('../models/form')
const router = express.Router()


router.post('/register' , async(req,res)=>{
    try{    
        let params = req.body ;
        // array = ['name' , 'email' , 'password' , 'cpassword']
        // for(index=0 ; index<array.lenght ; index++)
        // {
        //     let element = array[index]
        //     if(!params[element])
        //     {
        //         res.status(400).json({message:'Field is missing'})
        //     }
        // }

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

router.get('/register',async(req,res)=>{
try{
    const doc = await Registration.find()
    console.log(doc)
    if(!doc)
    {
        res.status(400).json({message:'Not found'})
    }
    res.status(200).json({message:'ok'})

}
catch(e){
    console.log(e)
    res.status(500).json({message:'ok'})
}
})

module.exports = router;
