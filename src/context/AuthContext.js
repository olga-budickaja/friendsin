import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    // user: null,
    user: {
        _id: "63ab606570196aa2803a8f8d",
            username: "bodyEm",
            email: "body@gmail.com",
            password: "$2b$10$n.2skM0flORoEc9lQyOr5Oj2T3UwGk3bUAEyuXoHA6kEWT3OdvXnG",
            avatar: "user3.jpg",
            bg: "bg11.jpg",
            followers: [
                "63aa1299b945c6937cda5058",
                "63a4f7dc460cb0513701d109",
                "63a4f6c4460cb0513701d107"
            ],
            followings: [
                "63a4f6c4460cb0513701d107",
                "63aa1299b945c6937cda5058",
                "63a4f7dc460cb0513701d109"
            ],
            isAdmin: "false",
            city: "New York",
            from: "Madrid",
            relationship: 1
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>{children}</AuthContext.Provider>
    )
}