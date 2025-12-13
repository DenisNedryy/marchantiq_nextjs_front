"use client";


import { Items_1Form } from "../../../components/forms/Items_1Form";
import { Items_2Form } from "../../../components/forms/Items_2Form";
import { Items_3Form } from "../../../components/forms/Items_3Form";
import { useState, useEffect } from "react";
import { updateItem } from "../../../services/items";
import { useNavigate } from "react-router-dom";

export function ItemsUpdate({ step, setStep }) {

    const [data, setData] = useState({});
    const [itemUuid, setItemUuid] = useState("");
    const [form1, setForm1] = useState({});
    const [form2, setForm2] = useState({});
    const [form3, setForm3] = useState({});
    const [isFirstImgAdd, setIsFirstImgAdd] = useState(false);
    const navigate = useNavigate();

    const invertedCategoryMap = {
        "mobilier": "furniture",
        "bibelot": "knick-knacks",
        "militaria": "militaria",
        "livre": "books",
        "numismatique": "numismatics",
        "tableau": "paintings",
        "carte-postale": "postcards",
        "divers": "miscellaneous"
    };

    useEffect(() => {
        controller();
    }, []);

    useEffect(() => {
        if (Object.keys(form3).length !== 0) {
            controller2();
        }
    }, [form3]);

    async function controller() {
        const id = getUrlIdParams();
        setItemUuid(id);
    }

    async function controller2() {
        const data = await mergeMyForms();
        const category = await updateMyItem(data);
        navigate(`/items/${invertedCategoryMap[category]}`);
    }

    function getUrlIdParams() {
        const str = window.location.href;
        const url = new URL(str);
        return url.searchParams.get("id");
    }

    async function mergeMyForms() {
        console.log(form3);
        const mergedForms = { ...form1, ...form2, ...form3 };
        mergedForms.isNew  = mergedForms.isNew=== true ? "1" : "0";
        return mergedForms;
    }

    async function updateMyItem(data) {
        const res = await updateItem(itemUuid, data);
        return res.category;
    }



    return (
        <>
            <div class="steps">
                <i className="fa-solid fa-check" />
                {step<4 && <p>Etape <span className="bold">{step}</span> sur <span className="bold">3</span></p>}
                {step === 1 && <h3>Entrez les détails de l’objet</h3>}
                {step === 2 && <h3>Entrez les détails de l'objet</h3>}
                {step === 3 && <h3>Entrez les détails de l'objet</h3>}
            </div>

            {step === 1 && <Items_1Form onUpdateForm={setForm1} onUpdateStep={setStep} />}
            {step === 2 && <Items_2Form onUpdateForm={setForm2} onUpdateStep={setStep} />}
            {step === 3 && <Items_3Form onUpdateForm={setForm3} onUpdateStep={setStep} />}

        </>
    );
}