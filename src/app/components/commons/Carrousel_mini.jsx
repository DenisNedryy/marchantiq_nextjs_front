"use client"

import { useState, useRef } from "react";
import { HOST } from "../../host";
import { deleteItemImg } from "../../services/items";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export function Carrousel_mini({ item, itemUuid, images, onUpdateItems }) {

    const [preview, setPreview] = useState(0);
    const bigImgRef = useRef(null);
    const [currentImg, setCurrentImg] = useState(0);
    const router = useRouter();
    const { state } = useAuth();

    let ficheWidth = 50; // 205w + 12 margin-right
    const turnRef = useRef(0);

const categoryMap = {
    "mobilier": "furniture",
    "bibelot": "knick-knacks",
    "militaria": "militaria",
    "livre": "books",
    "numismatique": "numismatics",
    "tableau": "paintings",
    "carte-postale": "postcards",
    "divers": "miscellaneous"
};


    async function handleShow(e) {
        const img = e.target;
        const index = img.getAttribute("data-index");
        const uuid = img.getAttribute("data-id");
        turnRef.current = index;
        setPreview(turnRef.current);
        setCurrentImg(turnRef.current);
        setCurrentImg(index);

        setPreview(index);
        bigImgRef.current.setAttribute("data-id", uuid);
        bigImgRef.current.style.animation = "none";
        void bigImgRef.current.offsetWidth;

        bigImgRef.current.style.animation = "myAnim .6s ease 0s 1 normal forwards";

        setTimeout(() => {
            bigImgRef.current.style.animation = "";
        }, 600);
    }

    function turnLeft() {
        turnRef.current--;
        if (turnRef.current < 0) turnRef.current = 0;
        setPreview(turnRef.current);
        setCurrentImg(turnRef.current);
    }

    function turnRight() {
        if (turnRef.current >= images.length - 1) return;
        turnRef.current++;
        setPreview(turnRef.current);
        setCurrentImg(turnRef.current);
    }

    function showImgFromApi() {
        window.open(`${HOST}/api/images/items/${images[preview].img_url}`)
    }

    function handleUpdateImg() {
        router.push(`/admin/updateItems-image?id=${itemUuid}&category=${categoryMap[item.category]}&imgUuid=${images[currentImg].uuid}`);
    }

    function handleAddImg() {
        router.push(`/admin/addItems-image?id=${itemUuid}&category=${categoryMap[item.category]}&`);
    }

    async function handleDeleteImg(e) {
        if (images.length <= 1) {
            alert("Impossible de supprimer l'image.\nChaque objet nécéssite au minimum une image.");
            return;
        };
        const btn = e.target;
        const imgUuid = images[currentImg].uuid;

        const res = await deleteItemImg(imgUuid);
        console.log(res);
        setPreview(0);
        await onUpdateItems();
    }

    function selectImg(e) {
        const dotEl = e.target;
        const index = dotEl.getAttribute("data-key");
        turnRef.current = index;
        setPreview(turnRef.current);
        setCurrentImg(turnRef.current);
    }

    return (
        <div className="carrouselMini">
            <div className="carrouselMini__previewContainer">
                <img src={`${HOST}/api/images/items/${images[preview].img_url}`} className="carrouselMini--preview" onClick={showImgFromApi} ref={bigImgRef} alt={item.name}/>
                {state.isAdmin && (<div className="carrouselMini__previewContainer__text__buttons">
                    <i className="fa-solid fa-plus btn-add-items" onClick={handleAddImg} />
                    <i className="fa-solid fa-pen btn-modify-items" onClick={handleUpdateImg} />
                    <i className="fa-solid fa-trash btn-delete-items" onClick={handleDeleteImg} />
                </div>)}
                <i className="fa-solid fa-caret-left turnLeft" onClick={turnLeft} />
                <i className="fa-solid fa-caret-right turnRight" onClick={turnRight} />
            </div>
            <div className="carrouselMini__dots">
                {images.map((img, index) => (
                    <div className={`${preview == index ? "dot currentDot" : "dot"}`} key={index} data-key={index} onClick={selectImg}></div>
                ))}
            </div>
            <div className="carrouselMini__miniatures">
                {images.map((img, index) => (
                    <img src={`${HOST}/api/images/items/${img.img_url}`} onClick={handleShow} data-index={index} data-id={img.uuid} key={index} />
                ))}
            </div>
        </div>
    );
}