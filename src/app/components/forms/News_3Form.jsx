import { createThreads } from "../../services/threads";

export function News_3Form({ onUpdateForm, onUpdateStep, uuid, setThreadUuid }) {



    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            sous_titre: form.elements['sous_titre'].value,
            description: form.elements['description'].value 
        }
        form.reset();
        createMyThread(uuid, data);
    }

    async function createMyThread(uuid, data) {
        const res = await createThreads(uuid, data);
        console.log(res);
        const threadUuid = res.uuid;
        setThreadUuid(threadUuid);
        onUpdateStep((prevState) => prevState + 1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titre du chapitre</label>
                <input type="text" name="sous_titre" placeholder="ex: Monnaies Gauloises " />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description"></textarea>
            </div>
            <button type="submit" className="btn">Suivant</button>
        </form>
    );
}