const express=require('express')
const bodyParser=require('body-parser')
const bcrypt=require('bcryptjs')

const app=express()
app.use(bodyParser.json())

const users=[]

app.get('/',(req,res)=>{
    res.send("heyy")
})

app.post('/register',async(req,res)=>{
    try {
        // Hash the password
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // Create a new user object
        const user = { username: req.body.username, password: hashedPassword };
        
        // Push the user object into the users array
        users.push(user);
        
        res.status(201).send("User registered successfully.");
    } catch {
        res.status(500).send("An error occurred while registering the user.");
    }
})

app.get('/register', (req, res) => {
    try {
        // Extract usernames from the users array
        const usernames = users.map(user => user.username);
        
        // Send the list of usernames as a response
        res.status(200).json(`hello ${usernames}`);
    } catch {
        res.status(500).send("An error occurred while retrieving usernames.");
    }
});

//Login endpoint
app.post('/login',async (req,res)=>{
    const user= users.find(user => user.username===req.body.username);
    if(user==null){
        return res.status(400).send("User not found.");
    }
    try{
        if (await bcrypt.compare(req.body.password,user.password)) {
            res.send('Login Successfull');
        }
    }catch{
        res.status(500).send("An error occured while logging in.");
    }
})


const port=3000
app.listen(port,()=>{
    console.log(`Server is on ${port}`);
})
