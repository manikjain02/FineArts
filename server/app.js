// Import All Dependencies
const dotenv = require('dotenv')
const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()

// Configure ENV File & Require Connection File
dotenv.config({path: './config.env'})
require('./db/conn')
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema')
const Message = require('./models/msgSchema')
const authenticate = require('./middleware/authenticate')

// These methods is used to get data and cookies from FrontEnd
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/', (req, resp)=>{
    resp.send("Hello World")
})

// Registeration
app.post('/register', async (req, resp)=>{
    try{
        // Get body or data
        const username = req.body.username;
        const email = req.body.email
        const password = req.body.password

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        })
        // Save Method is used to create user or insert user But before saving or inserting, password will hash because of hashing. After Hash, it will save to DB
        const created = await createUser.save()
        console.log(created)
        resp.status(200).send('Registered')
    }catch(error){
        resp.status(400).send(error)
    }
})

// Login User
app.post('/login', async (req, resp)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        // Find user if Exists
        const user = await Users.findOne({email: email})
        if(user){
            // Verify User
            const isMatch = await bcryptjs.compare(password, user.password)
            if(isMatch){
                // Generate Token which is define is user schema
                const token = await user.generateToken()
                resp.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires: new Date(Date.now() + 3600),
                    httpOnly: true
                })
                resp.status(200).send({user, token})
            }else{
                resp.status(400).send("Invalid Credentials")
            }
        }
    }catch(error){
        resp.status(400).send(error)
    }
})

// Message
app.post('/message', async (req, resp)=>{
    try{
        // Get body or data
        const name = req.body.name;
        const email = req.body.email
        const message = req.body.message

        const sendMsg = new Message({
            name: name,
            email: email,
            message: message
        })
        // Save Method is used to create user or insert user But before saving or inserting, password will hash because of hashing. After Hash, it will save to DB
        const created = await sendMsg.save()
        console.log(created)
        resp.status(200).send('Sent')
    }catch(error){
        resp.status(400).send(error)
    }
})

// Logout
app.get('/logout', (req, resp)=>{
    resp.clearCookie("jwt", {path: '/'})
    resp.status(200).send("User Logged Out")
})

// Authentication
app.get('/auth', authenticate, (req, resp)=>{

})

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})