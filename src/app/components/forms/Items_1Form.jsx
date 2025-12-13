"use client";

export function Items_1Form({ onUpdateForm, onUpdateStep }) {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.elements['name'].value,
            price: form.elements['price'].value,
            artist: form.elements['artist'].value,
            state: form.elements['state'].value,
            style: form.elements['style'].value,
            matiere: form.elements['matiere'].value, 
        };
        onUpdateForm(data);
        onUpdateStep((prevState) => prevState + 1);
    }

    return (
        <form className="createForm" onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input type="text" name="name" placeholder="ex: Bracelet antique" />
            </div>
            <div>
                <label>Prix</label>
                <input type="number" name="price" placeholder="ex: 27€" step="0.01"/>
            </div>
            <div>
                <label>Artiste</label>
                <input type="text" name="artist" placeholder="ex: Mr Dupont" />
            </div>
            <div>
                <label>Etat</label>
                <input type="text" name="state" placeholder="ex: Bon état" />
            </div>
            <div>
                <label>Style</label>
                <input type="text" name="style" placeholder="ex: Héritage d’Alexandrie" />
            </div>
            <div>
                <label>Matière</label>
                <input type="text" name="matiere" placeholder="ex: Bronze " />
            </div>
            <button type="submit" className="btn">Suivant</button>
        </form>
    );
}