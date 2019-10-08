require('dotenv').config();

const express = require('express');
const app = express();

const massive = require('massive');
const session = require('express-session');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;

// import controllers
const userCtrl = require('./controllers/userController');
const messageCtrl = require('./controllers/messageController');
const carCtrl = require('./controllers/carController');
const appointmentCtrl = require('./controllers/appointmentController');
const stripeCtrl = require('./controllers/stripeController');

app.use(express.json());

// session set 
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5
    }
}));

// massive set up
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to the Database');
}).catch(err => console.log('Unable to connect to Database'));

// Authenication Endpoints

// Authenication MiddleWare

// Stripe Endpoints
app.post('/api/payment', stripeCtrl.pay)

// Sockets Endpoints

// Listening for the Server Port
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));