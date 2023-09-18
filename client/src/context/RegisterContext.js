import { createContext, useReducer } from "react";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const RegisterContext = createContext(initialState);

const RegisterReducer = (state, action) => {
    switch (action.type) {
        case "REGISTRATION_START":
            return {
                user: null,
                loading: true,
                error: null,
            }
        case "REGISTRATION_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            }
        case "REGISTRATION_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const RegisterContextProvider = ({children}) => {
    const [state, disaptch] = useReducer(RegisterReducer, initialState);

    return (
        <RegisterContext.Provider
            value = {{
                user: state.user,
                loading: state.loading,
                error: state.error,
                disaptch,
            }}        
        >
          {children}
        </RegisterContext.Provider>
    )
}