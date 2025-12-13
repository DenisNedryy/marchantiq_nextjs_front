"use client"

import { updateThreadImg } from "../../services/threads";
import { useRouter } from "next/navigation";

export function UpdateThreadImgCient({newsUuid, threadImgId}) {

  const router = useRouter();

    async function handleSubmitThreadImg(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("img_url", form.elements['img_url'].files[0]);
        formData.append("commentaire", form.elements['commentaire'].value);
        form.reset();
        const res = await updateThreadImg(threadImgId, formData);
        console.log(res);
        router.push(`/news/news-details/${newsUuid}`);
    }

    return (
        <>
            <div className="box">
                <h1>Modification de l'image</h1 >

                <form onSubmit={handleSubmitThreadImg}>
                    <div>
                        <label>Image</label>
                        <input type="file" name="img_url" />
                    </div>
                    <div>
                        <label>Légende</label>
                        <input type="text" name="commentaire" placeholder="ex: voici une bague Gauloise en or" />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="btn">Modifier</button>
                    </div>
                </form>
            </div>
        </>
    );
}