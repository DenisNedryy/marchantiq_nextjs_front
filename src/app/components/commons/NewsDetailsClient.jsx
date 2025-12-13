"use client"

import { useState, useEffect } from "react";
import { getOneNews, deleteNews } from "../../services/news";
import { deleteThreadImg, deleteThread } from "../../services/threads";
import { HOST } from "../../host";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NewsDetailsClient({uuid}) {

    const [news, setNews] = useState([]);
    const { state, dispatch } = useAuth();
    const router = useRouter();

    async function getMyNews() {
        const res = await getOneNews(uuid);
        if (res) setNews(res.oneNews);
    }

    function showImgFromApi(e) {
        window.open(e.target.src);
    }

    async function deleteMyThreadImg(e) {
        e.preventDefault();
        const btnEl = e.target;
        const img_uuid = btnEl.getAttribute("data-id");

        const res = await deleteThreadImg(img_uuid);
        console.log(res);
        await getMyNews();
    }

    async function deleteMyArticle(e) {
        e.preventDefault();
        console.log(uuid);
        const res = await deleteNews(uuid);
        console.log(res);
        router.push("/news");
    }

    async function deleteMyThread(e) {
        e.preventDefault();
        const thread_uuid = e.target.getAttribute("data-id");
        const res = await deleteThread(thread_uuid);
        console.log(res);
        await getMyNews();
    }

    useEffect(() => {
        getMyNews();
    }, []);

    return (
        <div className="newsFocus">
            <div className="box">
                <h1>Actualité</h1>
                {news && news.length !== 0 && (
                    <div className="actuality">
                        <div className="actuality__news">
                            <p className="actuality__news--title">{news.titre}</p>
                            <p className="news-description">{news.description}</p>
                            <img src={`${HOST}/api/images/news/${news.img_url}`} onClick={showImgFromApi} />
                            {state.isAdmin && <button className="btn btn-deleteNews" onClick={deleteMyArticle}>Suprimer l'article</button>}
                            {state.isAdmin && <Link href={`/admin/updateArticle?id=${uuid}`}><button className="btn btn-updateNews">Modifier l'article</button></Link>}
                        </div>

                        {/*------threads-----*/}
                        <div className="actuality__threads">
                            {state.isAdmin && <Link href={`/admin/addArticles?step=3&id=${news.uuid}`}><button className="btn btn-createThread">Ajouter un chapitre</button></Link>}
                            {news.threads && news.threads.map((thread, index2) => (
                                <div key={index2} className="actuality__threads__thread">

                                    {state.isAdmin && <Link href={`/admin/updateThread?newsId=${news.uuid}&threadId=${thread.uuid}`}><button className="btn btn-updatedThread">Modifier</button></Link>}
                                    {state.isAdmin && <button className="btn btn-deleteThread" onClick={deleteMyThread} data-id={thread.uuid}>Supprimer</button>}
                                    <p className="thread-soustitre inter">{thread.sous_titre}</p>
                                    <p className="thread-description inter-regular">{thread.description}</p>
                                    {/*------threads img-----*/}
                                    <div className="actuality__threads__thread__img">
                                        {thread.images.length > 1 &&
                                            thread.images.map((cell, index3) => (
                                                <div key={index3} className="actuality__threads__thread__img__imgETlegend">
                                                    {state.isAdmin && <Link href={`/admin/updateThreadImg?newsId=${news.uuid}&threadImgId=${cell.uuid}`}><button className="btn btn-createThread">Modifier l'image</button></Link>}
                                                    {state.isAdmin && <button className="btn btn-deleteThreadImg" data-id={cell.uuid} onClick={deleteMyThreadImg}>Supprimer l'image</button>}
                                                    <img src={`${HOST}/api/images/threads/${cell.img_url}`} onClick={showImgFromApi} />
                                                    <p>{cell.commentaire}</p>
                                                </div>
                                            ))
                                        }
                                        {thread.images.length === 1 &&
                                            <div className="actuality__threads__thread__img__imgETlegend" style={{ width: "100%" }}>
                                                {state.isAdmin && <Link href={`/admin/updateThreadImg?newsId=${news.uuid}&threadImgId=${thread.images[0].uuid}`}><button className="btn btn-createThread">Modifier l'image</button></Link>}
                                                {state.isAdmin && <button className="btn btn-deleteThreadImg" data-id={thread.images[0].uuid} onClick={deleteMyThreadImg}>Supprimer l'image</button>}
                                                <img src={`${HOST}/api/images/threads/${thread.images[0].img_url}`} className="soloImgThread" onClick={showImgFromApi} />
                                                <p>{thread.images[0].commentaire}</p>
                                            </div>
                                        }




                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}