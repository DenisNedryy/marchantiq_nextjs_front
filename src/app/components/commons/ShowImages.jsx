"use client"

import { getOneItem } from "../../../services/items";
import { useState, useEffect } from "react";
import { HOST } from "../../../host/host"; 

export function ShowImages({ onUpdate, uuid }) {
    
    const [item, setItem] = useState(null);

    useEffect(() => {
        getMyItem();
    }, [onUpdate]);

    async function getMyItem() {
        const res = await getOneItem(uuid);
        setItem(res.item);
    }

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
