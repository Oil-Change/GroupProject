require('dotenv').config();
const twilio = require('twilio'); 

const { ACCOUNT_SID, AUTH_TOKEN } = process.env;

//twilio requirements -- Texting API 
const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);


//Twilio 
const sendCode = (req, res) => {

    //_GET Variables
    const { phone_number, code } = req.body;

    //Send Text
    client.messages.create({
        body: `Your verification code is ${code}`,
        to: phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

const pickUp = (req, res) => {
    //_GET Variables
    const { user } = req.body

    //Send Text
    client.messages.create({
        body: `Your car was picked up.`,
        to: user.phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

dropOff = (req, res) => {
    //_GET Variables
    const { user } = req.body

    //Send Text
    client.messages.create({
        body: `Success! Your car was picked up.` ,
        to: user.phone_number,  // Text this number
        from: '+18582174901' // From a valid Twilio number
    }).then((message) => console.log(message.body))
}

module.exports = {
    sendCode,
    pickUp,
    dropOff
}