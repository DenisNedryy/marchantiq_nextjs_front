"use client"

import { Items_1Form } from "../../../forms/Items_1Form";
import { Items_2Form } from "../../../forms/Items_2Form";
import { Items_3Form } from "../../../forms/Items_3Form";
import { Items_4Form } from "../../../forms/Items_4Form";
import { useState, useEffect } from "react";
import { createItem } from "../../../../services/items";
import { ShowImages } from "./ShowImages";
import { v4 as uuidv4 } from 'uuid';


export function Items({ step, setStep }) {

    const [data, setData] = useState({});
    const [itemUuid, setItemUuid] = useState("");
    const [form1, setForm1] = useState({});
    const [form2, setForm2] = useState({});
    const [form3, setForm3] = useState({});
    const [form4, setForm4] = useState({});
    const [mergedItemsForm, setMergedItemsForm] = useState([]);
    const [isFirstImgAdd, setIsFirstImgAdd] = useState(false);

    useEffect(() => {
        if (Object.keys(form3).length !== 0) {
            mergeMyForms();
        }
    }, [form3]);

    async function mergeMyForms() {
        const mergedForms = { ...form1, ...form2, ...form3 };
        const myUuid = uuidv4();
        setItemUuid(myUuid);
        mergedForms.uuid = myUuid;
        setMergedItemsForm(mergedForms);
    }

    return (
        <>
            <div className="steps">
                <i className="fa-solid fa-check" />
                <p>Etape <span className="bold">{step}</span> sur <span className="bold">4</span></p>
                {step === 1 && <h3>Entrez les détails de l’objet</h3>}
                {step === 2 && <h3>Entrez les détails de l'objet</h3>}
                {step === 3 && <h3>Entrez les détails de l'objet</h3>}
                {step === 4 && <h3>Ajouter des images</h3>}
            </div>

            {step === 1 && <Items_1Form onUpdateForm={setForm1} onUpdateStep={setStep} />}
            {step === 2 && <Items_2Form onUpdateForm={setForm2} onUpdateStep={setStep} />}
            {step === 3 && <Items_3Form onUpdateForm={setForm3} onUpdateStep={setStep} />}
            {step === 4 && (
                <>
                    <ShowImages onUpdate={form4} uuid={itemUuid} />
                    <Items_4Form onUpdateForm={setForm4} uuid={itemUuid} isFirstImgAdd={isFirstImgAdd} mergedItemsForms={mergedItemsForm} setIsFirstImgAdd={setIsFirstImgAdd}/>
                </>
            )}

        </>
    );
}