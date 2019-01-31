import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import listReducer from './listReducer';

const reducer = combineReducers({
    list: listReducer,
    form: formReducer
})

export default reducer;
