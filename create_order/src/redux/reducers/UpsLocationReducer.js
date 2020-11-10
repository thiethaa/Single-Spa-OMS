import actionTypes from '../actionTypes';

let initialState = {
    location : " "
}
export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_LOCATION: {
        const { location } = action;
        return {
          ...state,
          location,
        };
    }
      case actionTypes.RESET_INPUT: {
        return initialState;
      }
      default:
        return state;
    }
}