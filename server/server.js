require('dotenv').config();

const massive = require('massive');
const session = require('express-session');
const express = require('express');
const socket = require('socket.io')
const cors = require('cors');

const app = express();

app.use(cors());

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// import controllers
const userCtrl = require('./controllers/userController');
const carCtrl = require('./controllers/carController');
const appointmentCtrl = require('./controllers/appointmentController');
const stripeCtrl = require('./controllers/stripeController');
const twilioCtrl = require('./controllers/twilioController');
const authCtrl = require('./controllers/authController');


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
app.post('/auth/code', authCtrl.verifyCode)

// Authenication MiddleWare

// twilio text messages
app.post('/twilio/send-code', twilioCtrl.sendCode)
app.post('/twilio/send-pickUp', twilioCtrl.pickUp)
app.post('/twilio/send-dropOff', twilioCtrl.dropOff)

// userCtrl
app.post('/api/user/create', userCtrl.createUser)
app.post('/api/user/code', userCtrl.updateCode)
app.put('/api/user', userCtrl.updateUser)
app.get('/api/user/:id', userCtrl.getUser)

// stripCtrl Endpoint
app.post('/api/payment', stripeCtrl.pay);
app.post('/api/receipt', stripeCtrl.receipt);

// carCtrl
app.post('/api/car/:id', carCtrl.createCar)
app.get('/api/car/:id', carCtrl.getCar)

// appointmentCtrl
app.post('/api/appointment/create', appointmentCtrl.createAppointment)
app.get('/api/appointment/all', appointmentCtrl.getAllAppointments)
app.get('/api/appointment/today', appointmentCtrl.getTodaysAppointments)
app.get('/api/appointment/date', appointmentCtrl.getAppointments)
app.get('/api/appointment/:id', appointmentCtrl.getAppointment)
app.put('/api/appointment/pick_up/:id', appointmentCtrl.updatePickUp)
app.put('/api/appointment/drop_off/:id', appointmentCtrl.updateDropOff)
app.put('/api/appointment/charged/:id', appointmentCtrl.updateChargeDate)

const io = socket(
    // App Listening
    app.listen(SERVER_PORT, () => {
        console.log(`Server is Running on ${SERVER_PORT}!`)
    })
    )

// Sockets
io.on('connection', socket => {
    console.log('User Connected')
    socket.on('join room', async data => {
        const {room_id} = data
        const db = app.get('db')
        console.log('Room Joined')
        let existingRoom = await db.message.check_chat_room(room_id)
        let messages = await db.message.chat_messages_history(room_id)
        socket.join(room_id)
        io.to(room_id).emit('room joined', messages)
        
    })
    socket.on('message sent', async data => {
        const {roomId, message, user_name, is_admin, timestamp} = data
        const db = app.get('db')
        await db.message.create_chat_messages(roomId, message, user_name, is_admin,timestamp)
        let messages = await db.message.chat_messages_history(room_id)
        io.to(room_id).emit('message dispatched', messages)
    })
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })    
})