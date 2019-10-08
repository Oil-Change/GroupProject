require('dotenv').config();

const express = require('express');
const app = express();

const massive = require('massive');
const session = require('express-session');

const socket = require('socket.io')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;

// import controllers
const userCtrl = require('./controllers/userController');
const messageCtrl = require('./controllers/messageController');
const carCtrl = require('./controllers/carController');
const appointmentCtrl = require('./controllers/appointmentController');
const stripeCtrl = require('./controllers/stripeController');

app.use(express.json());

const io = socket(
    // App Listening
    app.listen(SERVER_PORT, () => {
        console.log(`Server is Running on ${PORT}!`)
    })
    )

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

// Additional Endpoints
// userCtrl
app.post('/api/user/create', userCtrl.createUser)
app.put('/api/user/update', userCtrl.updateUser)
// app.get('/')

// stripCtrl Endpoint
app.post('/api/payment', stripeCtrl.pay)





io.on('connection', socket => {
    console.log('User Connected')
    socket.on('join room', async data => {
        const {room} = data
        const db = app.get('db')
        console.log('Room Joined')
        let existingRoom = await db.chat.check_chat_room({id: room})
        !existingRoom.length ? db.chat.create_chat_rooms({id: room}) : null
        let messages = await db.messages.chat_messages_history({id: room})
        socket.join(room)
        io.to(room).emit('room joined', messages)
    })
    socket.on('message sent', async data => {
        const {room, message} = data
        const db = app.get('db')
        await db.messages.create_chat_messages({id: room, message})
        let messages = await db.messages.chat_messages_history({id: room})
        io.to(data.room).emit('message dispatched', messages)
    })
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })    
})