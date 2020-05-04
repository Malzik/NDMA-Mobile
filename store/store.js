import {applyMiddleware, createStore} from 'redux';
import allReducers from './AllReducers';
import thunk from 'redux-thunk';

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

export {store};
