"use client";

export function InscriptionForm({ onUpdateAuthState, onUpdateForm }) {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const magicWord = form.elements['magicWord'].value;
        const data = { name: name, email: email, password: password, magicWord: magicWord };
        onUpdateForm(data);
        form.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name-inscription">Nom:</label>
                    <input type="name" name="name" id="name-inscription" placeholder="ex: monNom" />
                </div>
                <div>
                    <label htmlFor="email-inscription">Email:</label>
                    <input type="email" name="email" id="email-inscription" placeholder="ex: monEmail@gmail.fr" />
                </div>
                <div>
                    <label htmlFor="password-inscription">Mot de passe:</label>
                    <input type="password" name="password" id="password-inscription" placeholder="ex: monMotDePasse" />
                </div>
                <div>
                    <label htmlFor="magicWord-inscription">Clef de sécurité:</label>
                    <input type="password" name="magicWord" id="magicWord-inscription" />
                </div>
                <button type="submit" className="btn"><i className="fa fa-check" />Envoyer</button>
            </form>
            <p className="toggleAuth-para" onClick={onUpdateAuthState}>Déjà inscrit ?</p>
        </>
    );
}