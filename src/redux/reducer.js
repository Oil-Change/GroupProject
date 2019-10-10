// Setting Inital State
const initialState = {
    phone_number: 0,
    user: {},
    car: {},
    appointment: []
};

// Action Types
const UPDATE_PHONE = 'UDPATE_PHONE';
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CAR = "UPDATE_CAR";
const UPDATE_APPT = "UPDATE_APPT";

// Action Builders
export function updatePhone(phoneNumber) {
    return {
        type: UPDATE_PHONE,
        payload: phoneNumber
    }
};

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
};

export function updateCar(car) {
    return {
        type: UPDATE_CAR,
        payload: car
    }
};

export function updateAppointment(appointment) {
    console.log("here", appointment)
    return {
        type: UPDATE_APPT,
        payload: appointment
    }
};

// Reducer Function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PHONE:
            const phone_number = action.payload;
            return { ...state, phone_number };
        case UPDATE_USER:
            const user = action.payload
            return { ...state, user }
        case UPDATE_CAR:
            const car = action.payload
            return { ...state, car }
        case UPDATE_APPT:
            console.log("app set", action.payload)
            // const appointment = action.payload
            return { ...state, appointment: action.payload }
        default:
            return state
    };
};