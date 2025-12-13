"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { Carrousel_mini } from "./Carrousel_mini";
import { deleteItem, getOneItem } from "../../services/items";

export function ItemsDetails({ uuid, category, myItem }) {

    const router = useRouter();
    const { state } = useAuth();
    const [item, setItem] = useState(myItem);

    //   if (!state.isAdmin) return null;

    function aeration(val) {
        const valArr = val.split(".");
        return valArr
            .filter(sentence => sentence.trim() !== "")
            .map((sentence, index) => (
                <span key={index}>
                    {sentence.trim()}.<br />
                </span>
            ));
    }

    async function getMyItem() {
        const res = await getOneItem(uuid);
        setItem(res.item);
    }

    async function handleDeleteItem(e) { 
        const btn = e.target;
        const id = btn.getAttribute("data-id");
        const res = await deleteItem(id);
        console.log(res);
        router.push(`/items/${category}`);
    }

    async function handleUpdateItem() {
        router.push(`/admin/updateItems?id=${uuid}`);
    }

    return (
        <div className="itemsDetails">
            <div className="box">
                {item && (
                    <>
                        <h1>{item.name}</h1>
                        <div className="itemDetails">
                            <div className="itemsDetails__text">
                                {state.isAdmin && (<div className="itemsDetails__text__buttons">
                                    <i className="fa-solid fa-pen btn-modify-items" data-id={item.uuid} onClick={handleUpdateItem} />
                                    <i className="fa-solid fa-trash btn-delete-items" data-id={item.uuid} onClick={handleDeleteItem} />
                                </div>)}
                                <p><span className="bold">Prix:</span> {item.price} €</p>
                                {item.artist && (
                                    <p><span className="bold">Artiste:</span> {item.artist}</p>
                                )}
                                {item.state && (
                                    <p><span className="bold">État:</span> {item.state}</p>
                                )}
                                {item.matiere && (
                                    <p><span className="bold">Matière:</span> {item.matiere}</p>
                                )}
                                {item.longeur && (
                                    <p><span className="bold">Longueur:</span> {item.longeur} cm</p>
                                )}
                                {item.largeur && (
                                    <p><span className="bold">Largeur:</span> {item.largeur} cm</p>
                                )}
                                {item.hauteur && (
                                    <p><span className="bold">Hauteur:</span> {item.hauteur} cm</p>
                                )}
                                {item.diam && (
                                    <p><span className="bold">Diamètre:</span> {item.diam} cm</p>
                                )}
                                {item.profondeur && (
                                    <p><span className="bold">Profondeur:</span> {item.profondeur} cm</p>
                                )}
                                {item.style && (
                                    <p><span className="bold">Style:</span> {item.style}</p>
                                )}
                                {item.epoque && (
                                    <p><span className="bold">Époque:</span> {item.epoque}</p>
                                )}
                                {item.year && (
                                    <p><span className="bold">Année:</span> {item.year}</p>
                                )}
                                {item.category && (
                                    <p><span className="bold">Catégorie:</span> {item.category}</p>
                                )}
                                {item.description && (
                                    <div><span className="bold">Description:</span> {aeration(item.description)}</div>
                                )}
                                <Link href={`/contact/${uuid}`}><button className="btn jump">Me contacter</button></Link>
                            </div>
                            <div className="itemsDetails__img">
                                <Carrousel_mini item={item} itemUuid={item.uuid} images={item.img_url} onUpdateItems={getMyItem} />
                            </div>
                        </div>

                    </>
                )
                }
            </div>
        </div>
    );
}