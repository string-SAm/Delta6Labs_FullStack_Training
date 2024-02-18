// const express=require('express')
// const ejs=require('ejs')

// const app=express()

// app.set('view engine','ejs')

// app.get("/",(req,res)=>{
//     res.render('index',{title:'Express with Ejs', message:"Hello ejs"})
// })

// app.get('/example',(req,res)=>{
//     const data={
//         pageTitle: 'Express.js Example',
//     message: 'Hello, this is an example of passing data to views!',
//     items: ['Item 1', 'Item 2', 'Item 3']
//     }
//     res.render('example',data)
// })

// const port=3000
// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// })

const express = require('express');
const app = express();
const port = 3000;
 
// Set EJS as the view engine
app.set('view engine', 'ejs');
 
// Define a route
app.get('/', (req, res) => {
  // Sample data
  const data = {
    title: 'Express.js Views Example',
    message: 'Rendering views with data in Express.js',
  };
 
  // Render the 'data1' view and pass the data
  res.render('example2.ejs', { data });
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});