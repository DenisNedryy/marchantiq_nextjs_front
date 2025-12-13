import { ShowCase_articles } from "./components/commons/ShowCase_articles";
import { ShowCase_items } from "./components/commons/ShowCase_items";
import { Flyers } from "./components/commons/Flyers";
import { HOST } from "./host.js";

export const metadata = {
  title: "Marchantiq - Accueil | Nouveautés et Sélection d’Articles",
  description:
    "Bienvenue sur Marchantiq : découvrez les nouveautés, les articles mis en avant et une sélection unique d’objets anciens et authentiques.",
  metadataBase: new URL(HOST),

  openGraph: {
    title: "Marchantiq - Objets anciens, nouveautés et sélection d’articles",
    description:
      "Découvrez une sélection unique d’objets anciens, authentiques et pleins d’histoire sur Marchantiq.",
    url: HOST,
    siteName: "Marchantiq",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/assets/pictures/flyer/marchantiq_flyer.jpeg", // ton image // marchantiq_flyer.jpeg
        width: 1200,
        height: 630,
        alt: "Marchantiq – Objets anciens et authentiques",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marchantiq - Objets anciens et nouveautés",
    description:
      "Nouveautés, objets anciens, pièces uniques : explorez la sélection Marchantiq.",
    images: ["/images/og-image.jpg"], // obligatoire pour summary_large_image
  },

  alternates: {
    canonical: HOST,
  },
};


export default function Home() {
  return (
    <>
      <div className="accueil">
        <ShowCase_articles />
        <ShowCase_items />
        <Flyers />
      </div>
    </>
  );
}
