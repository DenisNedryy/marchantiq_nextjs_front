
import { News_1Form } from "../forms/News_1Form";
import { News_2Form } from "../forms/News_2Form";
import { News_3Form } from "../forms/News_3Form";
import { News_4Form } from "../forms/News_4Form";
import { useState, useEffect } from "react";
import { createNews } from "../../services/news";
import { ShowImagesNews } from "../commons/ShowImagesNews";

export function News({ step, setStep }) {

    const [data, setData] = useState({});
    const [newsUuid, setNewsUuid] = useState("");
    const [threadUuid, setThreadUuid] = useState("");
    const [form1, setForm1] = useState({});
    const [form2, setForm2] = useState({});
    const [form3, setForm3] = useState({});
    const [form4, setForm4] = useState({});

    useEffect(() => {
        isThereAnyStepInParamsUrl();
        function isThereAnyStepInParamsUrl() {
            const str = window.location.href;
            const url = new URL(str);
            const stepParams = url.searchParams.get("step");
            const idParams = url.searchParams.get("id");
            if (!stepParams) return;
            setStep(3);
            setNewsUuid(idParams);
        }
    }, []);

    return (
        <>
            <div className="steps">
                <i className="fa-solid fa-check" />
                {step === 1 && <p>Création de l'article</p>}
                {step === 3 && <p>Création du chapitre</p>}
                {step === 1 && <h3>Entrez les détails de l’article</h3>}
                {step === 3 && <h3>Entrez les détails du chapitre</h3>}
            </div>

            {step === 1 && <News_1Form onUpdateForm={setForm1} onUpdateStep={setStep} />}
            {step === 3 && <News_3Form onUpdateForm={setForm3} onUpdateStep={setStep} uuid={newsUuid} setThreadUuid={setThreadUuid} />}
            {step === 4 && <News_4Form onUpdateForm={setForm4} onUpdateStep={setStep} newsUuid={newsUuid} threadUuid={threadUuid} />}
        </>
    );
}