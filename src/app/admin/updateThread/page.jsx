import { UpdateThreadClient } from "../../components/commons/UpdateThreadClient";

export default async function updateThread({ searchParams }) {

    const mySearchParams = await searchParams;
    const { newsId, threadId } = mySearchParams;


    return (
        <UpdateThreadClient newsUuid={newsId} threadUuid={threadId} />
    );
}