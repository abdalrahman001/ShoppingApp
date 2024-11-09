const express = require('express');
const {body}=require('express-validator');
const User=require('../models/user');
const router=express.Router()
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const [existingUser] = await User.find(email);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const user = new User(name, email, password);
  
      await User.save(user);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Step 1: Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Step 2: Find user by email
        const [existingUser] = await User.find(email);
        
        // Step 3: Check if user exists
        if (existingUser.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Step 4: Directly compare passwords (NOT RECOMMENDED for production)
        if (existingUser[0].password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Step 5: Send response
        res.status(200).json({
            message: 'Login successful',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports=router;
