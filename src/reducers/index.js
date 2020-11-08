import secondsReducer from './secondsLeft';
import sessionReducer from './sessionLength';
import breakReducer from './breakLength';
import activeReducer from './isOn';
import modeReducer from './mode.js';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    secondsLeft: secondsReducer,
    sessionLength: sessionReducer,
    breakLength: breakReducer,
    isOn: activeReducer,
    isBreak: modeReducer,
});

export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return allReducers(state, action)
}