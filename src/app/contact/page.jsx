
import { ContactForm } from "../components/forms/ContactForm";
import { ContactFlyer } from "../components/commons/ContactFlyer";


export const metadata = {
    title: "Contact Marchantiq | Formulaire et coordonnées",
    description:
        "Contactez Marchantiq pour toute question, demande d’estimation ou information sur un objet ancien. Utilisez le formulaire de contact ou écrivez directement par e-mail.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Marchantiq | Formulaire et coordonnées",
        description:
            "Besoin d’une estimation ou d’informations sur un objet ancien ? Contactez Marchantiq via le formulaire ou par e-mail.",
        url: "/contact",
    },
    twitter: {
        title: "Contact Marchantiq",
        description:
            "Formulaire de contact Marchantiq : posez vos questions, demandez une estimation ou des informations sur un objet ancien.",
    },
};


export default async function Contact() {

    return (
        <div className="contact">
            <div className="box">
                <h1>Coordonées</h1>
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
                <ContactForm />
            </div>
        </div>
    );
}