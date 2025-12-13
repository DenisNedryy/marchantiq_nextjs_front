"use client"

import { getOneItem } from "../../services/items";
import { useState, useEffect } from "react";
import { HOST } from "../../host";

export function ShowImagesNews({ onUpdate, uuid }) {
    const [item, setItem] = useState(null);

    async function getMyItem() {
        const res = await getOneItem(uuid);
        console.log(res);
        setItem(res.item);
    }

    useEffect(() => {
        getMyItem();
    }, [onUpdate]);

    if (!item) return <p>Chargement...</p>;

    return (
        <div className="showImages">
            {item.img_url && item.img_url.map((image, index) => (
                <div key={index}>
                    <img src={`${HOST}/api/images/items/${image.img_url}`} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
}
