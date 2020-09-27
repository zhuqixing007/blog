const initState = {loginState: false}
export const login = (state=initState, action) => {
    switch (action.type) {
        case "LOGIN": return {loginState: true};
        case "LOGOUT": return {loginState: false};
        default: break;
    }
    return state;
}