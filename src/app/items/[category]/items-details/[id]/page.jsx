import { getOneItem } from "../../../../services/items";
import { ItemsDetails } from "../../../../components/commons/ItemsDetails";
import  getItemJsonLd  from "../../../../components/utils/getItemJsonLd";
import  Script  from "next/script";

export async function generateMetadata({ params }) {
    // id
    const myParams = await params;
    const category = myParams.category;
    const id = myParams.id;

    // item
    const res = await getOneItem(id);
    const item = res.item;
    console.log(item);

    const title = `${item.name} | Marchantiq`;
    const shortDescription = item.description?.slice(0, 155) ||
        "Découvrez un objet ancien présenté sur Marchantiq.";

    const url = `https://marchantiq.fr/items/${category}/items-details/${id}`;

    const mainImage = item.img_url[0];

    return {
        title,
        description: shortDescription,
        alternates: {
            canonical: url, // permet de donne la priorité à indexé (!== page admin)
        },
        openGraph: {
            title,
            description: shortDescription,
            url,
            type: "website",
            images: mainImage ? [mainImage] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: shortDescription,
            images: mainImage ? [mainImage] : [],
        },
    };
}

export default async function ItemsDetailsMenu({ params }) {

    // GET the id
    const myParams = await params;
    const id = myParams.id;

    // GET the category
    const category = myParams.category;

    // GET the item
    const res = await getOneItem(id);
    const item = res.item;

    const jsonLd = getItemJsonLd(item, category, id);

    return (
        <>
            <Script
                id="product-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ItemsDetails uuid={id} category={category} myItem={item} />
        </>
    );
}