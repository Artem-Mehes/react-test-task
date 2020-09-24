import choosedDateReducer from './choosedDate';
import showPopupReducer from './showPopup';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    choosedDate: choosedDateReducer, 
    showPopup: showPopupReducer
});

export default allReducers;