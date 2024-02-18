// const greet=require('./greeting')
// console.log(greet("sam"));

const express=require('express')
const mongoose=require('mongoose')

const app=express()
const port=3000

mongoose.connect('mongodb+srv://swayamsoni1905:WIgA3WUjKmCva5e3@cluster0.xyqw43z.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
//middleware to parse JSON and URL encoded form data
app.use(express.json()) //we are sending data in the form in json
app.use(express.urlencoded({extended:true})) //

const db=mongoose.connection
db.on('error',console.error.bind(console, 'MongoDb connection error:'))
db.once('open',()=>{
    console.log('Coonected to DB');
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit', (req,res)=>{
    const formData=req.body
    res.send(`Form data send: ${JSON.stringify(formData)}`)
})


app.listen(port, ()=>{
    console.log(`Server is on ${port}`);
})
//WIgA3WUjKmCva5e3