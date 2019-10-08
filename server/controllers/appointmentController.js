const createAppointment = async (req, res) => {
    // console.log('Creating Appointment');
    // console.log('');
    const id = req.session.user.phone_number;
    console.log('user_id: ', id);
    const { cid } = req.body;
    // console.log('cid: ', cid);
    // console.log('');
    const { appointment, price, charge_date } = req.body;
    // console.log('appointment: ', appointment);
    // console.log('');
    const db = req.app.get('db');
    const appointmentCreated = await db.appointment.add_appointment([id, cid, appointment, price, charge_date]);
    // console.log('appointmentCreated: ', appointmentCreated);
    // console.log('');
    res.status(200).send(appointmentCreated[0]);
};

const getAppointment = async (req, res) => {
    // console.log(`Getting Apointments`);
    // console.log('');
    const db = req.app.get('db');
    const { id } = req.body;
    const getAppointment = await db.appointment.get_appointment([id]);
    // console.log('getAppointment: ', getAppointment);
    // console.log('');
    res.status(200).send(getAppointment);
};

const getTodaysAppointments = (req, res) => {
    // console.log(`Getting Today's Appointments`);
    // console.log('');
    const db = req.app.get('db');
    const getTodaysAppointment = await db.appointment.get_todays_appointments();
    // console.log('getTodaysAppointment: ', getTodaysAppointment);
    // console.log('');
    res.status(200).send(getTodaysAppointment);
};

const updatePickUp = async (req, res) => {
    console.log(`Updating Pick Up`);
    console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    // console.log('id: ', id);
    // console.log('');
    const { pickUpTime, pickUp } = req.body;
    // console.log('dropOffTime: ', dropOffTime);
    // console.log('');
    const updatePickUp = await db.appointment.update_pick_up([id, pickUpTime, pickUp])
    // console.log('updateDropOff: ', updateDropOff);
    // console.log('');
    req.status(200).send(updatePickUp);
};

const updateDropOff = (req, res) => {
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
    req.status(200).send(updateDropOff);
};

module.exports = {
    createAppointment,
    getAppointment,
    getTodaysAppointments,
    updatePickUp,
    updateDropOff
};