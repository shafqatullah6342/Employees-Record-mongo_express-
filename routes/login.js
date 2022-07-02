const Employee = require("../models/employee");
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {email, password} = req.body;
    // Employee.findOne({email: email, password: password}, (err, foundUser) => {
    //Employee.findOne({email: email, password: password}, 'email', (err, foundUser) => {
    Employee.find({
        //email: email
        password: {
            //$lt: 5
            //   $gt:5
            $in: ['qwerty', 'azerty']
        }
    }, (err, foundUser) => {

        if (err !== null)
            res.send(err)
        else {
            console.log(foundUser)
            res.send(foundUser)
        }
    })
});