import { getNews } from "../../services/news";
import { HOST } from "../../host";
import Link from "next/link";

export async function ShowCase_articles() {

    const res = await getNews();
    if (res && res.news) {
        var news = res.news[res.news.length - 1]
    }
    if (!res || !res.news) {
        return <>
            <h2>Erreur 404</h2>
            <p>Les articles sont introuvables</p>
        </>
    }

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str;
    }

    return (
        <div className="showCaseArticles">
            <div className="box">
                <h1>À la une</h1>
                <div className="showCaseArticles__container">
                    <img src={`${HOST}/api/images/news/${news.img_url}`} alt={news.titre} />
                    <Link href={`/news/news-details/${news.uuid}`}><button className="btn jump">Visiter</button></Link>
                    <div className="showCaseArticles__container__textContainer">
                        <p className="showCaseArticles__container__textContainer--title">{news.titre}</p>
                        <p className="showCaseArticles__container__textContainer--description">{truncate(news.description, 235)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}