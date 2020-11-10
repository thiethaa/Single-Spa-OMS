import actionTypes from '../actionTypes';

export default {
    setLocation: location =>({
        type: actionTypes.SET_LOCATION,
        location
    }),
    resetInputs: () => ({
        type: actionTypes.RESET_INPUT,
        })
}