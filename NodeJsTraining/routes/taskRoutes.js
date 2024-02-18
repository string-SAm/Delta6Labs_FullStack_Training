const express=require('express')

const router=express.Router()

const Task=require('../models/Task')

//create
router.post('/task',async(req,res)=>{
    try {
        const task=new Task(req.body)
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    console.log('Data inserted succesfully');
})

//read
router.get('/task',async(req,res)=>{
    try {
        const task=await Task.find()
    } catch (error) {
        res.status(500).send(error)
    }
console.log('Fetched...');
})

//update
router.patch('/task/:id', async()=>{
    try {
        const task=await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(600).send(error)
    }
    console.log('Data Uodated succesfully');
})

//delete
router.delete('/task/:id', async()=>{
    try {
        const task=await Task.findByIdAndDelete(req.params.id, req.body, {new:true, runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(600).send(error)
    }
    console.log('Data Uodated succesfully');
})

module.exports=router