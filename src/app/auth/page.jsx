"use client";

import SignUp from "../components/commons/auth/SignUp";
import LogIn from "../components/commons/auth/LogIn";
import { useState } from "react";


export default function Auth() {

    const [auth, setAuth] = useState(true);


    function toggleAuth() {
        setAuth((prevState) => !prevState);
    }
    return (
        <div className="auth">
            <div className="box">
                {auth ? (
                    <LogIn onUpdateAuthState={toggleAuth} />
                ) : (
                    <SignUp onUpdateAuthState={toggleAuth} />
                )}
            </div>
        </div>
    );
}