"use client";


import { AddItemsImgForm } from "../../../forms/AddItemsImgForm";

import { ShowImages } from "./ShowImages";
import { useState } from "react";

export function ItemsAddImg({ uuid, category }) {
    const [toggle, setToggle] = useState(false);

    function majShowImages() {
        setToggle((prevState) => !prevState);
    }

    return (
        <>
            <ShowImages onUpdate={toggle} uuid={uuid} />
            <AddItemsImgForm itemUuid={uuid} onUpdate={majShowImages} category={category} />
        </>
    );
}