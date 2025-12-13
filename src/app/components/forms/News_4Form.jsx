import { createThreadImg } from "../../services/threads";
import { useRouter } from "next/navigation";

export function News_4Form({ onUpdateForm, onUpdateStep, newsUuid, threadUuid }) {

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("img_url", form.elements['img_url'].files[0]);
        formData.append("commentaire", form.elements['commentaire'].value);
        createMyThreadImg(threadUuid, formData);
        form.reset();
    }

    async function createMyThreadImg(threadUuid, data) {
        const res = await createThreadImg(threadUuid, data);
        console.log(res);
    }

    function handleFinish() {
        router.push(`/news/news-details/${newsUuid}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Image</label>
                <input type="file" name="img_url" />
            </div>
            <div>
                <label>Légende</label>
                <input type="text" name="commentaire" placeholder="ex: voici une bague Gauloise en or" />
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn">Ajouter une image</button>
                <button type="button" className="btn" onClick={handleFinish}>Terminer</button>
            </div>
        </form>
    );
}