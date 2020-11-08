const sessionReducer = (state = 25, action) => {
    switch(action.type) {
        case 'SESSION':
            return action.payload;
        default:
            return state;
    }
}

export default sessionReducer;