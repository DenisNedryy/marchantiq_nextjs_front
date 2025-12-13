"use client";

import { useState, useEffect } from "react";
import { ItemsAddImg } from "./ItemsAddImg";

export function AdminAddImg() {

    const [itemStep, setItemStep] = useState(1);
    const [imgUuid, setImgUuid] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        controller();
    }, []);

    function controller() {
        const paramsUrl = getParamsFromUrl();
        setImgUuid(paramsUrl.uuid);
        setCategory(paramsUrl.category);
    }

    function getParamsFromUrl() {
        const str = window.location.href;
        const url = new URL(str);
        return { uuid: url.searchParams.get("id"), category: url.searchParams.get("category") };
    }

    return (
        <>
            <div className="box">
                <h2>Ajouter une image</h2>
                {console.log(imgUuid)}
                {imgUuid && <ItemsAddImg step={itemStep} setStep={setItemStep} uuid={imgUuid} category={category}/>}
            </div>
        </>
    );
}