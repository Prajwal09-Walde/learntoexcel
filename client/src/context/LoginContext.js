import { createContext, useReducer } from "react";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const LoginContext = createContext(initialState);

const LoginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const LoginContextProvider = ({children}) => {
    const [state, disaptch] = useReducer(LoginReducer, initialState);

    return (
        <LoginContext.Provider
            value = {{
                user: state.user,
                loading: state.loading,
                error: state.error,
                disaptch,
            }}        
        >
          {children}
        </LoginContext.Provider>
    )
}