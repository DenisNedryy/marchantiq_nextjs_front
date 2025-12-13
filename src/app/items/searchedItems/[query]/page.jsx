import Items from "../../[category]/page";
import { getItemsByResearch } from "../../../services/items";

export async function generateMetadata({ params }) {

    const myParams = await params;
    const queryParam = myParams?.query || "";
    const query = decodeURIComponent(queryParam);

    const baseTitle = query
        ? `Résultats pour "${query}"`
        : "Résultats de recherche";

    const description = query
        ? `Découvrez les objets anciens correspondant à la recherche "${query}" sur Marchantiq.`
        : "Découvrez les résultats de recherche d’objets anciens et de collection sur Marchantiq.";

    return {
        title: `${baseTitle} | Marchantiq`,
        description,
        alternates: {
            canonical: `/items/searchedItems/${queryParam}`,
        },
        openGraph: {
            title: `${baseTitle} | Marchantiq`,
            description,
            url: `/items/searchedItems/${queryParam}`,
            type: "website",
        },
        twitter: {
            card: "summary",
            title: `${baseTitle} | Marchantiq`,
            description,
        },
    };
}

export default async function searchedItems({ params }) {

    const myParams = await params;
    const query = myParams.query;

    const res = await getItemsByResearch(query);
    const items = res.items;

    return (
        <>
            <Items itemsData={items} query={query} />
        </>
    );
}