"use client";

export function ConnexionForm({onUpdateAuthState, onUpdateForm }) {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const data = { email: email, password: password };
        onUpdateForm(data);
        form.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email-connection">Email:</label>
                    <input type="email" name="email" id="email-connection" placeholder="ex: monEmail@gmail.fr"/>
                </div>
                <div>
                    <label htmlFor="password-connection">Mot de passe:</label>
                    <input type="password" name="password" id="password-connection" placeholder="ex: monMotDePasse"/> 
                </div>
                <button type="submit" className="btn"><i className="fa fa-check"/>Envoyer</button>
            </form>
            <p className="toggleAuth-para" onClick={onUpdateAuthState}>Pas encore inscrit ?</p>
        </>
    );
}