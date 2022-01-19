import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import dataSetter  from './reducers/dataSetter';
import dataFilter from './reducers/dataFilter';

const reducers = combineReducers ({
    dataSetter,
    dataFilter
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools()
);

export default store;