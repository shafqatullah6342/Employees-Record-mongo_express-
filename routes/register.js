const Employee = require("../models/employee");
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const {first_name, last_name, email, password} = req.body;
    new Employee({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }).save(err => {
        if (err) {
            res.send(err)
        } else {
            res.json({'every': 'ok'})
        }
    })
});