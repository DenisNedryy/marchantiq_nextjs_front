"use client"

import { useState } from "react";
import { News } from "./News";

export function AddArticlesClient() {

    const [newsStep, setNewsStep] = useState(1);

    return (
        <>
            <div className="box">
                <h1>Ajouter un article</h1>
                <News step={newsStep} setStep={setNewsStep} /> 
            </div>
        </>
    );
}