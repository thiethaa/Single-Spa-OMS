/*'''action for specified component which is the FormShip component'''
An action is an object that contains two keys and their values(type&payload). 
The state update that happens in the reducer is always dependent 
on the value of action.type*/
import actionTypes from '../actionTypes';

export default {
  setInputName: name => ({
    type: actionTypes.SET_INPUT_NAME,
    name,
  }),
  setInputAddress: address => ({
    type: actionTypes.SET_INPUT_ADDRESS,
    address
  }),
  setInputApt: apt => ({
    type: actionTypes.SET_INPUT_APT,
    apt
  }),
  setInputCity: city => ({
    type: actionTypes.SET_INPUT_CITY,
    city
  }),
  setInputUsState: usState => ({
    type: actionTypes.SET_INPUT_USSTATE,
    usState
  }),
  setInputZip: zip => ({
    type: actionTypes.SET_INPUT_ZIP,
    zip
  }),
  setInputPhone: phone => ({
    type: actionTypes.SET_INPUT_PHONE,
    phone
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}