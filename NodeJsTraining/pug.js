const express=require('express')
const app=express()

app.set('view engine','ejs')

//app.set('','')


app.get("/",(req,res)=>{
    res.render('index',{title:'Express with Pug', message:"Hello pug"})
})


const port=3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})