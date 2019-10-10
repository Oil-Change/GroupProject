require('dotenv').config();
const twilio = require('twilio'); 

const { ACCOUNT_SID, AUTH_TOKEN } = process.env;

//twilio requirements -- Texting API 
const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);


//Twilio 
const updateTempPass = (req, res) => {

    //_GET Variables
    const { user } = req.body;

    let min = 10000
    let max = 99999
    let num = Math.floor(Math.random() * (max - min + 1)) + min


    //Send Text
    client.messages.create({
        body: `Your verification code is ${num}`,
        to: user.phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

const pickUp = (req, res) => {
    //_GET Variables
    const { user, pickUpTime } = req.body


    //Send Text
    client.messages.create({
        body: `Your car was picked up.`,
        to: user.phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

dropOff = (req, res) => {
    //_GET Variables
    const { user, dropOffTime } = req.body


    //Send Text
    client.messages.create({
        body: `Success! Your car was picked up.` ,
        to: user.phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

module.exports = {
    updateTempPass,
    pickUp,
    dropOff
}