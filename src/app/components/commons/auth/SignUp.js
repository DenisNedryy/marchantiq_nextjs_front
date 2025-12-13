"use client";

import { useState, useEffect } from "react";
import { InscriptionForm } from "../../forms/InscriptionForm";
import { signOut } from "../../../services/users";

export default function SignUp({ onUpdateAuthState }) {

    const [formData, setFormData] = useState({});

    async function inscriptionManager() {
        if (Object.keys(formData).length === 0) return;
        const res = await signOut(formData);
        console.log(res);
    }

    useEffect(() => {
        inscriptionManager();
    }, [formData]);


    return (
        <>
            <h1>Inscription</h1>
            <InscriptionForm onUpdateAuthState={onUpdateAuthState} onUpdateForm={setFormData} />
        </>
    );
}