// setting inital state
const initalState = {
    phone: 0,
    user: {},
    car: {},
};

// Action Types
const UPDATE_PHONE = 'UDPATE_PHONE';
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CAR = "UPDATE_CAR";


// Action Builders
export function phoneUpdate(phoneNumber) {
    return {
        type: UPDATE_PHONE,
        payload: phoneNumber
    }
};

export function userUpdate(user) {
    return {
        type: UPDATE_PHONE,
        payload: user
    }
};

export function carUpdate(car) {
    return {
        type: UPDATE_PHONE,
        payload: car
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
        default:
            return state
    };
};

