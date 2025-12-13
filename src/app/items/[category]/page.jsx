import Image from "next/image";
import Link from "next/link";
import { getItemsByCategory } from "../../services/items";
import { HOST } from "../../host";
import { PaginationBottom } from "../../components/commons/PaginationBottom";

const categoryLabelMap = {
    furniture: "Mobilier ancien",
    "knick-knacks": "Bibelots anciens",
    militaria: "Objets militaria",
    books: "Livres anciens",
    numismatics: "Objets de numismatique",
    paintings: "Tableaux et peintures",
    postcards: "Cartes postales anciennes",
    miscellaneous: "Objets divers",
};

export async function generateMetadata({ params }) {
    const myParams = await params;
    const category = myParams.category;
    const label = categoryLabelMap[category] || "Objets anciens";

    return {
        title: `Marchantiq | ${label}`,
        description: `Découvrez la sélection de ${label.toLowerCase()} disponibles sur Marchantiq.`,
        alternates: {
            canonical: `/items/${category}`,
        },
        openGraph: {
            title: `Marchantiq – ${label}`,
            description: `Parcourez les ${label.toLowerCase()} disponibles sur Marchantiq.`,
            url: `/items/${category}`,
        },
    };
}

export default async function Items({ params, searchParams, itemsData = [], query = null }) {

    const myParams = await params;
    const category = myParams?.category;
    const mySearchParams = await searchParams;
    const currentPage = Number(mySearchParams?.page) || 1;
    const itemsPerPage = 6;
    const rangeSize = 6; // nombre de case dans la navigation pagination

    const categoryMap = {
        "furniture": "mobilier",
        "knick-knacks": "bibelot",
        "militaria": "militaria",
        "books": "livre",
        "numismatics": "numismatique",
        "paintings": "tableau",
        "postcards": "carte-postale",
        "miscellaneous": "divers"
    };

    const res = await getItemsByCategory(categoryMap[category]) || itemsData;
    let items = res.items;
    if (itemsData && itemsData.length > 0) {
        items = itemsData;
    } else {
        const res = await getItemsByCategory(categoryMap[category]);
        items = res?.items || [];
    }

    function getItemsPerPagination(items, itemsPerPage, page) {
        const itemsForThisPage = [];
        for (let i = (itemsPerPage) * (page - 1); i < itemsPerPage * page; i++) {
            if (items[i] == undefined) break;
            itemsForThisPage.push(items[i]);
        }
        return itemsForThisPage;
    }

    if (!items || items.length === 0) {
        return (<><img src="/assets/pictures/photos/notFound404.png" className="imgNotFound" alt="Item not found" /></>)
    }

    const myPageLength = Math.ceil(items.length / itemsPerPage);
    const itemsPerPagination = getItemsPerPagination(items, itemsPerPage, currentPage);

    return (
        <div className="items">
            <div className="box">
                <h1>{categoryMap[category] || "Objets recherchés"}</h1>
                <div className="items__container">
                    {itemsPerPagination && itemsPerPagination.length > 0 && itemsPerPagination.map((item, index) => (
                        <Link href={`/items/${category}/items-details/${item.uuid}`} key={index} className="items__container__item item-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}>
                            {item.isNew === 1 && <div className="items__container__item--banner">Nouveau</div>}
                            <img src={`${HOST}/api/images/items/${item.images[0].img_url}`} alt={item.name} />
                            <div className="items__container__item__text">
                                <p className="items__container__item__text--name">{item.name}</p>
                                <p className="items__container__item__text--price">{item.price}<span className="symbol-euro">€</span></p>
                            </div>
                        </Link>
                    ))}
                </div>
                {items && items.length > 0 && <PaginationBottom currentPage={currentPage} rangeSize={rangeSize} pageLength={myPageLength}  route={query ? `/items/searchedItems/${query}` : `/items/${category}`} />}
            </div>
        </div>
    );
}