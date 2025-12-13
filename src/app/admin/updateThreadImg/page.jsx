import { UpdateThreadImgCient } from "../../components/commons/UpdateThreadImgClient";

export default async function updateThreadImg({ searchParams }) {

    const mySearchParams = await searchParams;
    const { newsId, threadImgId } = mySearchParams;

    return (
        <>
            <UpdateThreadImgCient newsUuid={newsId} threadImgId={threadImgId} />
        </>
    );
}