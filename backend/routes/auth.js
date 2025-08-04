//this auth route handles the user authentication for the login in and registration
const express = require('express');// to create the routes
const router = express.Router();//to hold our register and login endpoints
const db = require('../db'); //to access the mysql database

//creating the register and login route
router.post('/register', (req, res)=>{
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err,result) =>{
        if(err) {
            console.error('Error during registration:', err);
            return res.status(500).send('Registration failed');
        }
        res.send('User registered successfully');
    });    
});

router.post('/login', (req, res) =>{
   const { username, password} = req.body;

   if(!username || !password){
    return res.status(400).send('Username and password are required');
   }

   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
   db.query(query, [username, password], (err, results) =>{
    if(err) {
        console.error('Error during login:', err);
        return res.status(500).send('Login failed');
    }

    if(results.length > 0){
        res.send('Login successful');
    }else{
        res.status(401).send('Invalid username or password');
    }
   });
});

module.exports = router;