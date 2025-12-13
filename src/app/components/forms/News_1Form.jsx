import { createNews } from "../../services/news";
import { useRouter } from "next/navigation";

export function News_1Form({ onUpdateForm, onUpdateStep, onUpdateNewsUuid }) { 

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("titre", form.elements['titre'].value);
        formData.append("img_url", form.elements['img_url'].files[0]);
        formData.append("category", form.elements['category'].value);
        formData.append("description", form.elements['description'].value);
        createMyNews(formData);
    }

    async function createMyNews(data) { 
        const res = await createNews(data);
        console.log(res);
        const uuid = res.uuid;
        onUpdateStep((prevState) => prevState + 1);
        router.push(`/news/news-details/${uuid}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titre</label>
                <input type="text" name="titre" placeholder="ex: Monnaies grecques antiques " />
            </div>
            <div>
                <label>Image principale</label>
                <input type="file" name="img_url" placeholder="ex: Monnaies grecques antiques " />
            </div>
            <div>
                <div>
                    <label htmlFor="categorie">Catégorie :</label>
                    <select name="category" id="categorie">
                        <option value="mobilier">Mobilier</option>
                        <option value="bibelot">Bibelot</option>
                        <option value="militaria">Militaria</option>
                        <option value="livre">Livre</option>
                        <option value="numismatique">Numismatique</option>
                        <option value="tableau">Tableau</option>
                        <option value="carte-postale">Carte postale</option>
                        <option value="divers">Divers</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Description</label>
                <textarea name="description"></textarea>
            </div>
            <button type="submit" className="btn">Suivant</button>
        </form>
    );
}