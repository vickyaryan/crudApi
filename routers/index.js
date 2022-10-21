const express = require('express')
const router = express.Router()
const User = require('../models')

router.get('/send',(req,res)=>{
res.send('Hello')
})
router.get('/',async (req,res)=>{
    try {
        const userData = await User.find()
        res.json({
            data: userData
        })

    } catch (error) {
        res.send('Error',error)
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const userData = await User.findById(req.params.id)
        res.json({
            data: userData
        })

    } catch (error) {
        res.send('Error',error)
    }
})

router.patch('/:id',async (req,res)=>{
    try {
        const userData = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            data: userData
        })

    } catch (error) {
        res.send('Error',error)
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const userData = await User.findByIdAndDelete(req.params.id)
        res.json({
            data: userData
        })

    } catch (error) {
        res.send('Error',error)
    }
})

router.post('/', async(req,res)=>{
    const userData = new User(req.body)
    try {
        const userSave = await userData.save()
        res.json({
            data: userSave
        })
    } catch (error) {
        res.send('Error',error)
    }
})


module.exports = router