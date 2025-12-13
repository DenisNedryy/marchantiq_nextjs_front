import { UpdateItemsImgForm } from "../../components/forms/UpdateItemsImgForm";

export default async function updateItemImg({ searchParams }) {

    const myParams = await searchParams;
    const { id, category, imgUuid } = myParams;

    return (
        <>
            <div className="box">
                <h2>Modifier une image</h2>
                {imgUuid && <UpdateItemsImgForm imgUuid={imgUuid} itemsUuid={id} category={category} />}
            </div>
        </>
    );
}