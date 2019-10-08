// setting inital state
const initialState = {
    phone: 0,
    user: {},
    car: {},
    appointment: null
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

export function updateAppointment(appt) {
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
            return { ...state, appointment: appt }    
        default:
            return state
    };
};

