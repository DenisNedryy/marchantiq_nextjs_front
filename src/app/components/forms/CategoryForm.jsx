"use client" 

export function CategoryForm({ onUpdateCategory }) {

    async function handleChange(e) {
        e.preventDefault();
        const category = e.target.value;
        onUpdateCategory(category);
    }


    return (
        <form onChange={handleChange}>
            <div>
                <label htmlFor="categorie">Sélectionner une catégorie :</label> 
                <select name="category" id="categorie">
                    <option value="toutes">Toutes</option>
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
        </form>
    );
}