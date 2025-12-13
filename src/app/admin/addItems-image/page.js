import { ItemsAddImg } from "../../components/commons/admin/items/ItemsAddImg";

export default async function addItemsImg({ searchParams }) {

    const mySearchParams = await searchParams;
    const { id, category } = mySearchParams; 

    return (
        <>
            <div className="box">
                <h2>Ajouter une image</h2>
                {id && <ItemsAddImg uuid={id} category={category} />}
            </div>
        </>
    );
}