const breakReducer = (state = 5, action) => {
    switch(action.type) {
        case 'BREAK':
            return action.payload;
        default:
            return state;
    }
}

export default breakReducer;