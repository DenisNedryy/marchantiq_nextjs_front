"use client"

import { useState } from "react";
import { ItemsUpdate } from "../../components/commons/ItemsUpdate";

export default function AdminUpdate() {

    const [itemStep, setItemStep] = useState(1);

    return (
        <>
            <div className="box">
                <h2>Modifier un objet</h2>
                <ItemsUpdate step={itemStep} setStep={setItemStep} /> 
            </div> 
        </>
    );
}