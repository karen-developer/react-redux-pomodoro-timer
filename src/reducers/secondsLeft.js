const timerReducer = (state = 1500, action) => {
    switch(action.type) {
        case 'SECONDS':
            return action.payload;
        default:
            return state;
    }
}

export default timerReducer;