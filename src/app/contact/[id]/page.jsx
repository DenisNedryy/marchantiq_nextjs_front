
import { ContactForm } from "../../components/forms/ContactForm";
import { ContactFlyer } from "../../components/commons/ContactFlyer";



export async function generateMetadata({ params }) {
    const myParams = await params;
    const id = myParams.id;

    return {
        title: "Marchantiq - Contact | Formulaire et coordonnées",
        description:
            "Contactez Marchantiq pour toute question, estimation ou information sur un objet ancien.",
        alternates: {
            canonical: id ? `/contact/${id}` : "/contact",
        },
    };
}



export default async function Contact({ params }) {

    const myParams = await params;
    const id = myParams.id;

    return (
        <div className="contact">
            <div className="box">
                <h2>Coordonées</h2>
                <div className="contact__coordonées" >
                    <ContactFlyer />
                </div>
            </div>
            <div className="box">
                <h2>Contacter Marchantiq</h2>
                <div className="contact__contact">
                    <p className="contact__contact__para">Vous avez une question sur l’un de nos objets ?</p>
                    <p className="contact__contact__para">Vous souhaitez obtenir une estimation et nous proposer un échange ou un achat ?</p>
                    <p className="contact__contact__para">Pour toute demande, merci d’utiliser le formulaire de contact ci-dessous.</p>
                    <p className="contact__contact__addresseEmail">Adresse email Marchantiq : march.jf@orange.fr</p>
                </div>
                <ContactForm uuid={id}/> 
            </div>
        </div>
    );
}