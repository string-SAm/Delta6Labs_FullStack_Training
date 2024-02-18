const express=require('express')
const mongoose=require('mongoose')


const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        require:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model('Task',taskSchema)