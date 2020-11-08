
export const enable = () => ({type: 'ENABLE'});
export const disable = () => ({type: 'DISABLE'});
export const modeSession = () => ({type: 'MODE-SESSION'});
export const modeBreak = () => ({type: 'MODE-BREAK'});
export const reset = () => ({type: 'RESET'});

export const setSession = (number) => {
    return {
        type: 'SESSION',
        payload: number
    }
};

export const setBreak = (number) => {
    return {
        type: 'BREAK',
        payload: number
    }
};

export const setSeconds = (number) => {
    return {
        type: 'SECONDS',
        payload: number
    }
};
