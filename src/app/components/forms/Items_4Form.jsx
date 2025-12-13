"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addImage, createItem } from "../../services/items";

export function Items_4Form({ onUpdateForm, uuid, isFirstImgAdd, mergedItemsForms, setIsFirstImgAdd }) {

    const [isNew, setIsNew] = useState(true);
    const router = useRouter();
    const [isImgForgot, setIsImgForgot] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("# start of the handleSubmit");
        const form = e.target;
        const imgUrl = form.elements['img_url'].files[0];
        if(imgUrl) setIsImgForgot(false);
        const formData = new FormData();
        formData.append("img_url", imgUrl);

        console.log("console avec isFirstImgAdd props");
        // Vérification d'une première image lié à l'items
        if (isFirstImgAdd) {
              console.log("only add img");
            await addMyImg(formData);
        } else {
            console.log("creation item + img");
            const res = await createItem(mergedItemsForms);
            console.log("response for createItem" , res);
            const res2 = await addMyImg(formData);
            console.log("response for addingImg" , res2);
            setIsFirstImgAdd(true);
        }

        form.reset();
    }

    function handleClick() {
        if(isImgForgot){
            alert("Image manquante\nAppuyez sur “Ajouter une image” pour ajouter l’image choisie.");
            return;
        }
        router.push("/");
    }

    async function addMyImg(data) {
        const res = await addImage(data, uuid);
        onUpdateForm(data);
        console.log(res);
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
            <div>
                <label>Image</label>
                <input type="file" name="img_url" />
            </div>

            <div className="form-buttons">
                <button type="submit" className="btn">Ajouter une image</button>
                <button type="button" className="btn" onClick={handleClick}>Terminer</button>
            </div>
        </form>
    );
}