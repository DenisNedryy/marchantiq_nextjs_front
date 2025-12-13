

// app/news/page.jsx
import { getNews } from "../services/news";
import NewsClient from "../components/commons/NewsClient";

export const metadata = {
  title: "Marchantiq – Actualités & articles",
  description:
    "Découvrez les articles publiés par Marchantiq : antiquités, objets rares, faits divers historiques, catégories thématiques et actualités du monde des collectionneurs.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Marchantiq – Actualités & articles",
    description:
      "Parcourez les articles publiés sur Marchantiq autour des antiquités et objets de collection.",
    url: "/news",
  },
  twitter: {
    card: "summary",
    title: "Marchantiq – Actualités",
    description:
      "Articles, antiquités, objets rares et sujets variés liés au monde de la collection.",
  },
};
export default async function NewsPage({ searchParams }) {
const res = await getNews().catch(() => null);
const news = res?.news ?? [];


  const mySearchParams = await searchParams;
  let page = 1;
  if (mySearchParams) page = mySearchParams.page;

  return <NewsClient initialNews={news} page={page}/>;
}
