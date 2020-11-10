import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers/Reducer';

/*create store object by pass the reducer or rootReducer*/
export default createStore(rootReducers, composeWithDevTools(
    applyMiddleware(),
  ));