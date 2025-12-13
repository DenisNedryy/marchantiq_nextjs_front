"use client";

import { useState, useEffect } from "react";
import { ConnexionForm } from "../../forms/ConnexionForm";
import { signIn } from "../../../services/users";
import { useRouter } from "next/navigation";

export default function LogIn({ onUpdateAuthState }) {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    async function connectionManager() {
        if (Object.keys(formData).length === 0) return;
        const res = await signIn(formData);
        console.log(res);
        if (res.ok) {
            router.refresh();
            router.push('/');
        } else {
            alert("Erreur d'authentification");
        }
    }

    useEffect(() => {
        connectionManager();
    }, [formData]);

    return (
        <>
            <h1>Connexion</h1>
            <ConnexionForm onUpdateAuthState={onUpdateAuthState} onUpdateForm={setFormData} />
        </>
    );
}