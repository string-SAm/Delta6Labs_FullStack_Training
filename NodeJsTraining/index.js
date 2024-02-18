// const express=require('express')
// const mongoose=require('mongoose')
// const route = require('./routes/taskRoutes')

// const app=express()
// mongoose.connect('mongodb+srv://swayamsoni1905:WIgA3WUjKmCva5e3@cluster0.xyqw43z.mongodb.net/',{
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// })
// const db=mongoose.connection
// db.on('error',console.error.bind(console, 'MongoDb connection error:'))
// db.once('open',()=>{
//     console.log('Coonected to DB');
// })
// app.get('/',(req,res)=>{
//     res.send('hell')
// })

// app.use('/',route)

// const port=3000
// app.listen(port,()=>{
//     console.log(`Server is on ${port}`);
// })

// const express = require('express');
// const app = express();
 
// // Middleware to log the request details
// app.use((req, res, next) => {
//   console.log(`Request received: ${req.method} ${req.url}`);
//   next();
// });

 
// // Route that sends a basic response
// app.get('/hello', (req, res) => {
//   res.send('Hello, Express!');
// });
 
// // Route that sends a JSON response
// app.get('/json', (req, res) => {
//   const data = { message: 'Hello, JSON!' };
//   res.json(data);
// });
 
// // Route that redirects to another URL
// app.get('/redirect', (req, res) => {
//   res.redirect('/hello');
// });
 
// // Route that renders an HTML page
// app.get('/render', (req, res) => {
//   res.render('index'); // Assumes you have a template engine set up
// });
 
// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });
 
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const port = 3000;
 
// Respond with "Hello, World!" for requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
// Respond with JSON for requests to '/api/data'
app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'This is a JSON response',
    timestamp: new Date().toISOString()
  };
  res.json(jsonData);
});
 
// Respond with HTML for requests to '/html'
app.get('/html', (req, res) => {
  const htmlContent = '<h1>This is an HTML response</h1>';
  res.send(htmlContent);
});
 
// Respond with a custom status code and message for requests to '/status'
app.get('/status', (req, res) => {
  res.status(403).send('Access Forbidden');
});
 
// Redirect to another URL for requests to '/redirect'
app.get('/redirect', (req, res) => {
  res.redirect('https://www.example.com');
});
 
// Handle a 404 Not Found error
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
 
// Handle errors (500 Internal Server Error)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 Internal Server Error');
});
 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});