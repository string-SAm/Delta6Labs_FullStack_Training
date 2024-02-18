const express = require('express');
const app =express()
 
app.get('/',(req,res)=>{
    const isLoggedin = true

    if(isLoggedin){
        res.json('Welcome user!')
    }else{
        res.json('Welcome Guest!')
    }
})

app.get('/result',(req,res)=>{
    const fruits=['apl','bnn','orng']

    let fruitlist='<ul>';
    for(const fruit of fruits){
        fruitlist+=`<li>${fruit}</li>`
    }
    fruitlist+='</ul>'
res.send(fruitlist)
})
 
app.listen(3000,()=>{
    console.log(`Server is running at localhost:3000`)
})