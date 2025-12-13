"use client"

import { updateThreads } from "../../services/threads";
import { useRouter } from "next/navigation";

export function UpdateThreadClient({ newsUuid, threadUuid }) {

  const router = useRouter();

    async function handleSubmitThreadText(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            sous_titre: form.elements['sous_titre'].value,
            description: form.elements['description'].value
        }
        form.reset();
        const res = await updateThreads(threadUuid, data);
        console.log(res);
        router.push(`/news/news-details/${newsUuid}`);
    }

    return (
        <>
            <div className="box">
                <h1>Modification du chapitre</h1>
                <form onSubmit={handleSubmitThreadText}>
                    <div>
                        <label>Titre du chapitre</label>
                        <input type="text" name="sous_titre" />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" />
                    </div>
                    <button type="submit" className="btn">Modifier</button>
                </form>
            </div>
        </>
    );
}