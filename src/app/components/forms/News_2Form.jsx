import { createThreads } from "../../services/threads";
import { useState } from "react";

export function News_2Form({ onUpdateForm, onUpdateStep, newsUuid }) {
    const [isThread, setIsThread] = useState(false);

    async function handleSubmitThread(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        const data = {
            sous_titre: form.elements['sous_titre'].value,
            description: form.elements['description'].value
        };

        await createMyThreads(data);
        // onUpdateStep((prevState) => prevState + 1);
    }

    async function createMyThreads(data) {
        const res = await createThreads(newsUuid, data);
        console.log(res);
        setIsThread(true);
    }

    return (
        <form onSubmit={handleSubmitThread}>
            <div>
                <label>Titre du chapitre</label>
                <input type="text" name="sous_titre" />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" />
            </div>
            <button type="submit" className="btn">Suivant</button>
            {/* <div>
                <label>Légende</label>
                <input type="text" name="sous_titre" placeholder="ex: Monnaies grecques antiques" />
            </div>
            <div>
                <label>Image principale</label>
                <input type="file" name="img_url" />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" placeholder="ex: Frappées entre le VIe et le Ier siècle..."></textarea>
            </div> */}

        </form>
    );
}