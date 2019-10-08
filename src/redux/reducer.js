// setting inital state
const initalState = {
    phone: 0,
    user: {},
    car: {},
    appointment: {}
};

// Action Types
const UPDATE_PHONE = 'UDPATE_PHONE';
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CAR = "UPDATE_CAR";
const UPDATE_APPT = "UPDATE_APPT";


// Action Builders
export function phoneUpdate(phoneNumber) {
    return {
        type: UPDATE_PHONE,
        payload: phoneNumber
    }
};

export function userUpdate(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
};

export function carUpdate(car) {
    return {
        type: UPDATE_CAR,
        payload: car
    }
};

export function appointmentUpdate(appt) {
    return {
        type: UPDATE_APPT,
        payload: appt
    }
};

// Reducer Function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PHONE:
            const phoneNumber = action.payload;
            return { ...state, phoneNumber };
        case UPDATE_USER:
            const user = action.payload
            return { ...state, user }
        case UPDATE_CAR:
            const car = action.payload
            return { ...state, car }
        case UPDATE_APPT:
            const appt = action.payload
            return { ...state, appt }    
        default:
            return state
    };
};

