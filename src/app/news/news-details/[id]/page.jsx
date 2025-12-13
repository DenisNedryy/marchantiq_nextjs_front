import { NewsDetailsClient } from "../../../components/commons/NewsDetailsClient";
import { getOneNews } from "../../../services/news";
import { HOST } from "../../../host";
import Script from "next/script"; 
import getNewsJsonLd from "../../../components/utils/getNewsJsonLd";


export async function generateMetadata({ params }) {
    const myParams = await params;
    const id = myParams.id;

    let news = null;
    try {
        const res = await getOneNews(id);
        news = res && res.oneNews;
    } catch (e) {
        news = null;
    }

    if (!news) {
        return {
            title: "Actualité introuvable | Marchantiq",
            description: "Cette actualité n'existe pas ou n'est plus disponible.",
            robots: { index: false, follow: false },
        };
    }

    const title = `${news.titre} | Marchantiq – Actualités`;

    const fullDesc =
        (news.description && news.description.replace(/\s+/g, " ").trim()) ||
        "Article publié sur Marchantiq autour des antiquités et objets de collection.";

    const shortDescription =
        fullDesc.length > 155 ? fullDesc.slice(0, 152) + "..." : fullDesc;

    const path = `/news/news-details/${id}`;

    const mainImage = news.img_url
        ? `${HOST}/api/images/news/${news.img_url}`
        : null;

    return {
        title,
        description: shortDescription,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description: shortDescription,
            url: path,
            type: "article",
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

export default async function newsDetails({ params }) {

    const myParams = await params;
    const id = myParams.id;

    const res = await getOneNews(id);
    const news = res.oneNews;
    const jsonLd = getNewsJsonLd(news, id);

    return (
        <>
            <Script
                id="news-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NewsDetailsClient uuid={id} />
        </>
    );
}