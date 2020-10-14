const initState = {
    width: window.innerWidth,
    height: window.innerHeight,
}
export const windowSize = (state=initState, action) => {
    switch (action.type) {
        case "RESIZE": return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        default: break;
    }
    return state;
}