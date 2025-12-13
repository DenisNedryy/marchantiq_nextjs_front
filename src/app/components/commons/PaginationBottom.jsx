"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function PaginationBottom({ currentPage, rangeSize, pageLength, route }) {
    const [pagesArray, setPagesArray] = useState([]);
    const router = useRouter();

    async function controller() {
        const myArray = getPageRange(currentPage, pageLength, rangeSize);
        setPagesArray(myArray);
    }

    function getPageRange(currentPage, totalPages, rangeSize) {
        const half = Math.floor(rangeSize / 2);
        let start = Math.max(1, currentPage - half);
        let end = currentPage + half;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - rangeSize + 1);
        }

        const rangeArr = [];

        for (let i = start; i <= end; i++) {
            rangeArr.push(i);
        }

        if (start > 1) {
            if (start > 2) rangeArr.unshift('...');
            rangeArr.unshift(1);
        }
        if (end < totalPages) {
            if (end < totalPages - 1) rangeArr.push('...');
            rangeArr.push(totalPages);
        }

        return rangeArr;
    }

    useEffect(() => {
        controller();
    }, [currentPage, pageLength, rangeSize]);


    function navigateToNextPage() {
        const nextPage = currentPage + 1;
        if (nextPage > pageLength) return;
        router.push(`${route}?page=${nextPage}`)
    }

    function navigateToPreviousPage() {
        const previousPage = currentPage - 1;
        if (previousPage < 1) return;
        router.push(`${route}?page=${previousPage}`)
    }

    return (
        <div className="paginationBottom">
            <div className="cell arrow" onClick={() => navigateToPreviousPage()}><i className="fa-solid fa-angle-left" /></div>
            {pagesArray.map((page, index) => (
                <ul key={index}>
                    {page === '...' ? (
                        <li className="cell">...</li>
                    ) : (
                        <Link href={`${route}?page=${page}`}>
                            <li className={`${Number(page) === Number(currentPage) ? "cell currentPage" : "cell"}`}>{page}</li>
                        </Link>
                    )}
                </ul>
            ))}
            <div className="cell arrow" onClick={() => navigateToNextPage()}><i className="fa-solid fa-angle-right" /></div>
        </div>
    );
}
