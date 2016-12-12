import { createStore, combineReducers } from 'redux';
import settingReducer from '../reducers/settingReducer';

const Reducers = combineReducers({
    settingReducer
});

export default createStore(Reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);