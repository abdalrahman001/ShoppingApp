const express = require('express');
const {body}=require('express-validator');
const User=require('../models/user');
const router=express.Router()
router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email')
        .custom(async(emai)=>{
            const user=await User.find(email);
            if(user[0].length>0){
                return Promise.reject('Email already exists');
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({min:5}),
    ],
    authControler.signup
);
module.exports=router;
