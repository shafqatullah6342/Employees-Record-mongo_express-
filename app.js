const express = require('express')

const bodyParser = require('body-parser')
const multer = require('multer')         //image uploading
const mongoose = require('mongoose')
const session = require('express-session/')
const {v4: uuidv4} = require('uuid')

//   حقیقی کام
const app = express()

//?      routing👇
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const updateRoute = require('./routes/update')
const deleteRoute = require('./routes/delete')


app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/update', updateRoute)
app.use('/delete', deleteRoute)


const Employee = require('./models/employee')


var sess;
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
}))

/*
const uploadConfiq = multer({
    storage:
})*/

mongoose.connect("mongodb://localhost:27017/employees-record", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3000, function () {
    console.log('Listing to port 3000...')
});


