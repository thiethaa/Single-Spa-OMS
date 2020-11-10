/*initialState/ default value of states*/
import actionTypes from '../actionTypes';

const initialState = {
  name: "",
  address: "",
  apt: "",
  city: "",
  usState: "",
  zip: "",
  phone: "",
  stateList: [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_NAME: {
      const { name } = action;
      return {
        // spread operartor to copy all the props of app(state)
        ...state,
        name,
      }
    }
    case actionTypes.SET_INPUT_ADDRESS: {
      const { address } = action;
      return {
        ...state,
        address,
      }
    }
    case actionTypes.SET_INPUT_APT: {
      const { apt } = action;
      return {
        ...state,
        apt,
      }
    }
    case actionTypes.SET_INPUT_CITY: {
      const { city } = action;
      return {
        ...state,
        city,
      }
    }
    case actionTypes.SET_INPUT_USSTATE: {
      const { usState } = action;
      return {
        ...state,
        usState,
      }
    }
    case actionTypes.SET_INPUT_ZIP: {
      const { zip } = action;
      return {
        ...state,
        zip,
      }
    }
    case actionTypes.SET_INPUT_PHONE: {
      const { phone } = action;
      return {
        ...state,
        phone,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}