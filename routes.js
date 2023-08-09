const express = require('express')
const user = require('./schema_model')
const router = express.Router()


// create API

router.post('/', async(req,res) => {
    const {name,email,age} = req.body
    
    try {
        const userAdded =await user.create({
            name:name,
            email:email,
            age:age
        })
        console.log(userAdded)
        res.status(201).json(userAdded)
    } 
    catch (error) {
        
        res.status(400).json({error:error.message})
        
    }
    
   

})

// Getiing users API

router.get('/',async(req,res) => {
    try {
        const showAll = await user.find()
        res.status(200).json(showAll)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    
})


//Getting single user API

router.get('/:id', async(req,res) => {
    try {
        const singleUser = await user.findById(req.params)
        console.log(singleUser)
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


// Delete user 

router.delete('/:id', async(req,res) => {
    try {
        const singleUser = await user.findByIdAndDelete(req.params.id)
        
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


//Update user API

router.put('/:id', async(req,res) => {
    try {
        const updateUser= await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(updateUser)
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})




module.exports = router