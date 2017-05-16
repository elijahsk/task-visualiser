const userReducer = (
    state = { hasAuthed: false, username: "Guest" },
    action
) => {
    console.log("action", action);
    switch (action.type) {
        case "SIGNUP_USER": {
            return {
                hasAuthed: true,
                username: action.username
            };
        }
        case "SIGNIN_USER":
            return {
                hasAuthed: true,
                username: action.username
            };
        case "LOGOUT_USER":
            return {
                hasAuthed: false,
                username: "Guest"
            };
        default:
            return state;
    }
};

export default userReducer;
