"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateItemsImgForm } from "../../../components/forms/UpdateItemsImgForm";

export function ItemsUpdateImg({ imgUuid, uuid, category }) {

    return (
        <>
            <UpdateItemsImgForm itemsUuid={uuid} imgUuid={imgUuid} category={category} />
        </>
    );
}