import {combineReducers} from 'redux';
import {reducer} from "./reducers/reducer";

const allReducers = combineReducers({
    reducer: reducer,
});

export default allReducers;
