"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { isUserConnected } from "../services/users";
import { usePathname } from "next/navigation";

const initialState = {
    isAdmin: false,
};

// Reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAdmin: true };
        case "LOGOUT":
            return { ...state, isAdmin: false };
        case "SET_ADMIN":
            return { ...state, isAdmin: action.payload };
        default:
            return state;
    }
};

// Context
const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const pathname = usePathname();

    //  Met à jour isAdmin en fonction du backend
    async function refreshUser() {
        try {
            const res = await isUserConnected();
            const admin = res?.data?.isUser === true;

            dispatch({ type: "SET_ADMIN", payload: admin });
        } catch (e) {
            dispatch({ type: "SET_ADMIN", payload: false });
        }
    }

    // Rafraîchit à chaque changement d'URL
    useEffect(() => {
        refreshUser();
    }, [pathname]);

    return (
        <AuthContext.Provider value={{ state, dispatch, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used inside <AuthProvider>");
    }
    return ctx;
};
