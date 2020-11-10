import { combineReducers } from 'redux';
import inputs from './ShippingAddressReducer';
import UpsLocationReducer from './UpsLocationReducer';

/*Combine reducers combines
the separate reducer files into one
A reducer determines a changes to an application’s state,
It uses the action to determine this change*/
export default combineReducers({
  inputs,
  UpsLocationReducer
})
