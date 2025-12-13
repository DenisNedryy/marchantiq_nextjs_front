"use client";

import { HOST } from "../../host";
import { useState, useEffect } from "react";
import { PaginationBottom } from "./PaginationBottom";
import Link from "next/link";


export function DisplayNews({ data, page = 1 }) {
    const itemsPerPage = 6;


    const pageFromUrl = Number(page);

    const [myCurrentPage, setMyCurrentPage] = useState(pageFromUrl);
    const [nbPage, setNbPage] = useState(1);
    const [items, setItems] = useState([]);

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str;
    }

    function getItemsPerPagination(items, itemsPerPage, page) {
        const itemsForThisPage = [];
        for (let i = itemsPerPage * (page - 1); i < itemsPerPage * page; i++) {
            if (items[i] === undefined) break;
            itemsForThisPage.push(items[i]);
        }
        return itemsForThisPage;
    }

    useEffect(() => {
        const currentPage = pageFromUrl || 1;

        setMyCurrentPage(currentPage);

        const myPageLength = Math.ceil((data?.length || 0) / itemsPerPage);
        setNbPage(myPageLength);

        const itemsPerPagination = getItemsPerPagination(
            data || [],
            itemsPerPage,
            currentPage
        );
        setItems(itemsPerPagination);
    }, [pageFromUrl, data]);

    return (
        <>
            <div className="displayNews" key={myCurrentPage}>
                {[...items].reverse().map((news, index) => (
                    <div
                        key={news.uuid ?? index}
                        className="displayNews__container item-fade-in"
                        data-id={news.uuid}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="displayNews__container__img">
                            <img src={`${HOST}/api/images/news/${news.img_url}`} />
                        </div>
                        <div className="displayNews__container__text">
                            <p>{truncate(news.titre, 135)}</p>
                            <Link href={`/news/news-details/${news.uuid}`}>
                                <button className="btn">Visiter</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <PaginationBottom
                currentPage={myCurrentPage}
                rangeSize={5}
                pageLength={nbPage}
                route={`/news`}
                itemsPerPage={itemsPerPage}
            />
        </>
    );
}
