"use client";

import { useState, useEffect } from "react";
import { ItemsUpdateImg } from "./ItemsUpdateImg";

export function AdminUpdateImg() {

    const [imgUuid, setImgUuid] = useState("");
    const [uuid, setUuid] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        controller();
    }, []);

    function controller() {
        const paramsUrl = getParamsFromUrl();
        setImgUuid(paramsUrl.imgUuid);
        setUuid(paramsUrl.uuid);
        setCategory(paramsUrl.category);
    }

    function getParamsFromUrl() {
        const str = window.location.href;
        const url = new URL(str);
        return { uuid: url.searchParams.get("id"), imgUuid: url.searchParams.get("imgUuid"), category: url.searchParams.get("category") };
    }

    return (
        <>
            <div className="box">
                <h2>Modifier une image</h2>
                {imgUuid && <ItemsUpdateImg imgUuid={imgUuid} uuid={uuid} category={category} />}
            </div>
        </>
    );
}