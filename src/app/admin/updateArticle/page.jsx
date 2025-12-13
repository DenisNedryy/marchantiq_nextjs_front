import { UpdateArticleClient } from "../../components/commons/UpdateArticleClient";

export default async function updateArticle({searchParams}){

    const mySearchP = await searchParams;
    const id = mySearchP.id;

    return (
        <>
        <UpdateArticleClient uuid={id}/>
        </>
    );
}