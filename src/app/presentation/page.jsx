import Image from "next/image";
import portrait from "../../../public/assets/pictures/photos/portrait.webp";


export const metadata = {
    title: "Marchantiq – Présentation | À propos du propriétaire et de sa passion",
    description:
        "Découvrez l’histoire de Marchantiq et la présentation de Jean-François Marchais : antiquaire passionné, collectionneur et amoureux des objets anciens.",
    alternates: {
        canonical: "/presentation",
    },
    openGraph: {
        title: "Marchantiq – À propos du propriétaire",
        description:
            "Présentation de Jean-François Marchais, passionné d’antiquités et créateur du site Marchantiq.",
        url: "/presentation",
        type: "profile",
        images: [
            {
                url: "/assets/pictures/photos/portrait.webp",
                width: 1200,
                height: 630,
                alt: "Portrait du propriétaire Marchantiq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Marchantiq – Présentation",
        description:
            "Découvrez l’histoire de Marchantiq et de son créateur, passionné d’objets anciens.",
        images: ["/assets/pictures/photos/portrait.webp"],
    },
};

export default function Presentation() {
    return (
        <div className="presentation">
            <div className="box">
                <h1>À propos de Marchantiq</h1>

                <Image
                    src={portrait}
                    alt="Portrait du propriétaire de Marchantiq"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />

                <h2>Jean-François Marchais – Antiquaire passionné depuis toujours</h2>

                <p>
                    Je m'appelle <strong>Jean-François Marchais</strong> et je suis 
                    passionné par les antiquités et les objets anciens depuis mon plus jeune âge.
                    Très tôt, j’ai compris que certains objets ont une âme : ils témoignent d’une
                    époque, d’un savoir-faire, d’une histoire. C’est cette fascination qui a donné
                    naissance à <strong>Marchantiq</strong>.
                </p>

                <p>
                    Depuis de nombreuses années, je parcours brocantes, marchés aux puces, vide-greniers 
                    et ventes aux enchères à la recherche de pièces authentiques. Chaque découverte me 
                    plonge dans un voyage à travers le temps et nourrit ma compréhension des styles, 
                    matériaux, artisans et périodes historiques. Cette expérience de terrain m’a permis 
                    d’affiner mon œil, d’acquérir des connaissances solides et de développer une vraie 
                    expertise dans des domaines variés : mobilier, militaria, tableaux, numismatique, 
                    bibelots, livres anciens et objets de curiosité.
                </p>

                <h2>Une volonté de transmission et de partage</h2>

                <p>
                    J’aime transmettre mes connaissances à d’autres passionnés et j’échange régulièrement 
                    avec des collectionneurs, artisans, restaurateurs et antiquaires. Je participe également 
                    à des associations locales qui œuvrent pour la préservation du patrimoine et pour la 
                    sauvegarde d’objets anciens qui pourraient autrement disparaître.
                </p>

                <p>
                    Mon objectif est d’<strong>éveiller la curiosité</strong> du plus grand nombre : montrer 
                    que les objets anciens ne sont pas seulement décoratifs, mais qu’ils sont porteurs 
                    d’histoires humaines, d’ingéniosité et de culture. J’accorde une importance particulière 
                    à la <strong>transparence</strong> dans l’identification des pièces, leurs états, leurs 
                    matériaux et leurs origines, car la confiance est essentielle dans ce domaine.
                </p>

                <h2>Marchantiq : une plateforme fiable et humaine</h2>

                <p>
                    Avec Marchantiq, ma volonté est simple : offrir un espace clair, accessible et fiable 
                    pour tous les amoureux d’objets anciens. Les objets mis en ligne sont sélectionnés avec 
                    soin et décrits de manière rigoureuse pour garantir une expérience d’achat sereine et 
                    respectueuse du patrimoine.
                </p>

                <p>
                    Pour moi, être antiquaire n’est pas seulement un métier : 
                    <strong>c’est une vocation</strong>, une façon de relier le passé au présent et de 
                    transmettre un héritage culturel qui me tient profondément à cœur.
                </p>
            </div>
        </div>
    );
}
