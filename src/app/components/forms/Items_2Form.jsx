"use client";

export function Items_2Form({ onUpdateForm, onUpdateStep }) {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            epoque: form.elements['epoque'].value,
            year: form.elements['year'].value,
            category: form.elements['categorie'].value,
            description: form.elements['description'].value,
        }
        onUpdateForm(data);
        onUpdateStep((prevState) => prevState + 1); 
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
            <div>
                <label>Epoque</label>
                <input type="text" name="epoque" placeholder="ex: Antiquité" />
            </div>
            <div>
                <label>Année</label>
                <input type="text" name="year" placeholder="ex: 200 ans avant JC" />
            </div>
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
            <div>
                <label>Description</label>
                <textarea name="description"></textarea>
            </div>

            <button type="submit" className="btn">Suivant</button>
        </form>
    );
}