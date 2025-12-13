"use client";

import { useState } from "react";

export function Items_3Form({ onUpdateForm, onUpdateStep }) {
    const [isNew, setIsNew] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            longeur: form.elements['longeur'].value,
            largeur: form.elements['largeur'].value,
            hauteur: form.elements['hauteur'].value,
            diam: form.elements['diam'].value,
            profondeur: form.elements['profondeur'].value,
            isNew: isNew
        }
        onUpdateForm(data);
        onUpdateStep((prevState) => prevState + 1);  
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
            <div>
                <label>Longeur</label>
                <input type="text" name="longeur" placeholder="ex: 23cm" />
            </div>
            <div>
                <label>Largeur</label>
                <input type="text" name="largeur" placeholder="ex: 4cm" />
            </div>
            <div>
                <label>hauteur</label>
                <input type="text" name="hauteur" placeholder="ex: 4cm" />
            </div>
            <div>
                <label>Diamètre</label>
                <input type="text" name="diam" placeholder="ex: 12cm" />
            </div>
            <div>
                <label>Profondeur</label>
                <input type="text" name="profondeur" placeholder="ex: Bon état" />
            </div>
            <div>
                <label>Nouveau ?</label>
                <button type="button" className="btn" onClick={() => setIsNew(!isNew)}>{isNew ? "Oui" : "Non"}</button>
            </div>
            <button type="submit" className="btn">Suivant</button>
        </form>
    );
}