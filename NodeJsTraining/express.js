const express=require('express')
const fs=require('fs')


const app=express()

app.get('/',(req,res)=>{
    res.send("heyy")
})

app.get('/read',(req,res)=>{
    const filepath='file.txt'
    
    fs.readFile(filepath, 'utf-8', (err, data)=>{
        if(err){
            return res.status(500).send('Error in reading file')
        }
        res.send(data)
    }) 
})

app.get('/write',(req,res)=>{
    const filepath='file.txt'
    const content="hello!"
    
    fs.writeFile(filepath,content, 'utf-8', (err, data)=>{
        if(err){
            return res.status(500).send('Error in writing file')
        }
        res.send('written succesfully')
    }) 
})


const port=3000
app.listen(port,()=>{
    console.log(`Server is on ${port}`);
})