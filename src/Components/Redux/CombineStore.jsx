import { combineReducers } from 'redux';

import counterReducer from './Reducers/CounterReducer';
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
})

export default rootReducer