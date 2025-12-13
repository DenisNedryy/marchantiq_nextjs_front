// components/utils/getNewsJsonLd.js
import { HOST } from "../../host"; 

export default function getNewsJsonLd(news, id) {
  const path = `/news/news-details/${id}`;
  const url = `${HOST}${path}`;

  const fullDesc =
    (news.description && news.description.replace(/\s+/g, " ").trim()) ||
    "Article publié sur Marchantiq autour des antiquités et objets de collection.";

  const shortDescription =
    fullDesc.length > 155 ? fullDesc.slice(0, 152) + "..." : fullDesc;

  const mainImage = news.img_url
    ? `${HOST}/api/images/news/${news.img_url}`
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle", 
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: news.titre,
    description: shortDescription,
    articleBody: fullDesc,
    image: mainImage ? [mainImage] : undefined,
    articleSection: news.category || undefined,
    identifier: news.uuid,
    author: {
      "@type": "Organization",
      name: "Marchantiq",
    },
    publisher: {
      "@type": "Organization",
      name: "Marchantiq",
    },
  };

  // nettoyage des undefined
  Object.keys(jsonLd).forEach((key) => {
    if (jsonLd[key] === undefined) {
      delete jsonLd[key];
    }
  });

  return jsonLd;
}
