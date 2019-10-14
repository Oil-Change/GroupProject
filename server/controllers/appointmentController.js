const createAppointment = async (req, res) => {
    // console.log('Creating Appointment');
    // console.log('');
    const id = req.session.user.phone_number;
    console.log('user_id: ', id);
    const { cid } = req.body;
    // console.log('cid: ', cid);
    // console.log('');
    const { appointment, price } = req.body;
    // console.log('appointment: ', appointment);
    // console.log('');
    const db = req.app.get('db');
    const createdAppointment = await db.appointment.add_appointment([id, cid, appointment, price]);
    // console.log('appointmentCreated: ', appointmentCreated);
    // console.log('');
    res.status(200).send(createdAppointment[0]);
};

const getAppointment = async (req, res) => {
    // console.log(`Getting Apointments`);
    // console.log('');
    const db = req.app.get('db');
    const { id } = req.body;
    const appointment = await db.appointment.get_appointment([id]);
    // console.log('getAppointment: ', getAppointment);
    // console.log('');
    res.status(200).send(appointment);
};

const getAllAppointments = async (req, res) => {
    // console.log(`Getting Apointments`);
    // console.log('');
    const db = req.app.get('db');
    const appointments = await db.appointment.get_appointments();
    // console.log('getAppointment: ', getAppointment);
    // console.log('');
    res.status(200).send(appointments);
};


const getTodaysAppointments = async (req, res) => {
    console.log(`Getting Today's Appointments`);
    console.log('');
    const db = req.app.get('db');
    const todaysAppointments = await db.appointment.get_todays_appointments();
    console.log('getTodaysAppointment: ', todaysAppointments);
    console.log('');
    res.status(200).send(todaysAppointments);
};

const getAppointments = async (req, res) => {
    console.log(`Getting day's Appointments`);
    const { month, year } = req.body
    console.log("req-date", date);
    const db = req.app.get('db');
    const daysAppointments = await db.appointment.get_dates_appointments(month, year);
    console.log('daysAppointments: ', daysAppointments);
    console.log('');
    res.status(200).send(daysAppointments);
};

const updatePickUp = async (req, res) => {
    // console.log(`Updating Pick Up`);
    // console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    // console.log('id: ', id);
    // console.log('');
    const { pickUpTime, pickUp } = req.body;
    // console.log('pickUpTime: ', pickUpTime);
    // console.log('');
    const updatePickUp = await db.appointment.update_pick_up([id, pickUpTime, pickUp])
    // console.log('updatePickUp: ', updatePickUp);
    // console.log('');
    res.status(200).send(updatePickUp);
};

const updateDropOff = async (req, res) => {
    // console.log(`Updating Drop Off`);
    // console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    // console.log('id: ', id);
    // console.log('');
    const { dropOffTime, dropOff } = req.body;
    // console.log('dropOffTime: ', dropOffTime);
    // console.log('');
    const updateDropOff = await db.appointment.update_drop_off([id, dropOffTime, dropOff])
    // console.log('updateDropOff: ', updateDropOff);
    // console.log('');
    res.status(200).send(updateDropOff);
};

const updateChargeDate = async (req, res) => {
    // console.log(`Updating Charged Date`);
    // console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    // console.log('id: ', id);
    // console.log('');
    const { price, charge_date } = req.body;
    // console.log('charge_date: ', charge_date);
    // console.log('');
    const updateChargedDate = await db.appointment.update_charged_date([id, price, charge_date])
    // console.log('updateChargedDate: ', updateChargedDate);
    // console.log('');
    req.status(200).send(updateChargedDate);
};

module.exports = {
    createAppointment,
    getAppointment,
    getAllAppointments,
    getTodaysAppointments,
    getAppointments,
    updatePickUp,
    updateDropOff,
    updateChargeDate
};