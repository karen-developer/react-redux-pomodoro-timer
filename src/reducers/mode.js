const modeReducer = (state = false, action) => {
    switch(action.type) {
        case 'MODE-SESSION':
            return false;
        case 'MODE-BREAK':
            return true;
        default:
            return state;
    }
}

export default modeReducer;