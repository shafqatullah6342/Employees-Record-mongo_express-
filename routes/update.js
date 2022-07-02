const Employee = require("../models/employee");
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    //params---> find(),update(),callback()
    Employee.updateOne({email: 'enw@gmail.com',}, {
            password: 'changa'
        }, (err, doc) => {
            if (err)
                console.log(err)
            else
                res.send(doc)
        }
    )
});