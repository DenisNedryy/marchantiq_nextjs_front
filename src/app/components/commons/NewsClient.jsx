"use client"

import { getNews, getNewsByCategory } from "../../services/news";
import { CategoryForm } from "../forms/CategoryForm";
import { DisplayNews } from "./DisplayNews";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

export default function News({ initialNews, page = 1 }) {

    const { state, dispatch } = useAuth();
    const [category, setCategory] = useState("toutes");
    const [news, setNews] = useState(initialNews);

    async function category_ctrl() {
        if (category === "toutes") {
            await displayAllCategories();
        } else {
            await displayNewsByCategory();
        }
    }

    async function displayAllCategories() {
        const res = await getNews();
        setNews(res.news);
    }

    async function displayNewsByCategory() {
        const res = await getNewsByCategory(category);
        setNews(res.news);
    }

    useEffect(() => {
        category_ctrl();
    }, [category]);

    return (
        <div className="newsCorner">
            <div className="box">
                <h1>Le coin des collectionneurs</h1>
                <CategoryForm onUpdateCategory={setCategory} />
                {state.isAdmin && <Link href="/admin/addArticles"><button className="btn">Créer un article</button></Link>}
                {news && news.length !== 0 ? (<DisplayNews data={news} page={page}/>) : (<p style={{ marginTop: "50px" }}>Aucun article n’a été créé pour le moment.</p>)}
            </div>
        </div>
    );
}