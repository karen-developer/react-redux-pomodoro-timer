const activeReducer = (state = false, action) => {
    switch(action.type) {
        case 'ENABLE':
            return true;
        case 'DISABLE':
            return false;
        default:
            return state;
    }
}

export default activeReducer;