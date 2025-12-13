import Link from "next/link";
import "./globals.css";
import empire from "../../public/assets/pictures/icon/blasons/empire.png";
import fr from "../../public/assets/pictures/icon/blasons/fr.png";
import drapeau from "../../public/assets/pictures/icon/blasons/drapeau.png";
import Image from "next/image";
import { Providers } from "./Providers";
import { HeaderMenu } from "./components/commons/HeaderMenu";
import { MyAside } from "./components/commons/MyAside";
import { HOST } from "./host";

export const metadata = {
  metadataBase: new URL(`${HOST}`),

  title: {
    default: "Marchantiq | Achat, Vente et Estimation d’objets anciens",
    template: "%s | Marchantiq",
  },
  description:
    "Marchantiq est spécialisé dans l’achat, la vente et l’estimation d’objets anciens et de collection. Découvrez nos nouveautés, articles à la une et services aux collectionneurs.",

  // Pour les moteurs de recherche
  alternates: {
    canonical: "/",
  },

  // SEO technique
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn…)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${HOST}`,
    siteName: "Marchantiq",
    title: "Marchantiq | Achat, Vente et Estimation d’objets anciens",
    description:
      "Objets anciens, collections, estimations et nouveautés : découvrez l’univers Marchantiq.",
    images: [
      {
        url: "/assets/pictures/flyer/marchantiq_flyer.jpeg",
        width: 1200,
        height: 630,
        alt: "Marchantiq – Objets anciens et authentiques",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@marchantiq", 
    title: "Marchantiq - Objets anciens et estimations",
    description:
      "Achat, vente et estimation d’objets anciens et de collection avec Marchantiq.",
    images: ["/assets/pictures/flyer/marchantiq_flyer.jpeg"],
  },

  // Favicon & icônes
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // Optionnel mais sympa pour le SEO local
  category: "ecommerce",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="app">
        <Providers>
          <header>
            <div className="header__logo">
              <div className="header__logo__content">
                <Image src={fr} alt="logo fr" width={100} height={101.5} />
                <Image src={empire} alt="logo ger" width={100} height={93} />
                <div>
                  <h1><span className="inital-red">M</span><span className="main-title">archantiq</span></h1>
                  <p>Achat - Vente - Estimation</p>
                </div>
                <Image src={drapeau} className="drapeau" alt="logo drapeau" width={86} height={124.7} />
              </div>
            </div>
            <HeaderMenu />
          </header>
          <main>
            <MyAside />
            {children}
          </main>
          <footer>
            <div className="footerContainer">
              <div className="footerContainer__top">
                <div className="footerContainer__top__left">
                  <p><span className="inital-red">M</span><span className="main-title">archantiq</span></p>
                </div>
                <div className="footerContainer__top__right">
                  <div className="footerContainer__top__right--category">
                    <p className="description">Informations de contact</p>
                    <ul>
                      <li>Adresse postale</li>
                      <li>Numéro de téléphone: 06 12 36 00 87</li>
                      <li>Adresse e-mail: march.js@orange.fr</li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="footerContainer__top__right--category">
                    <p className="description">Liens utiles</p>
                    <ul>
                      <li><Link href="/presentation">À propos / Qui sommes-nous</Link></li>
                      <li> <Link href="/">Accueil</Link></li>
                      <li> <Link href="/items/furniture">Mobilier</Link></li>
                      <li><Link href="/news">Le coin des collectionneurs</Link></li>
                    </ul>
                  </div>
                  <div className="footerContainer__top__right--category">
                    <p className="description">Obligations légales</p>
                    <ul>
                      <li>EDITEUR: Marchais Jean-François</li>
                      <li>HERBERGEUR: o2switch</li>
                      <li>SIRET: EI RCS SIREN 818279408 poitiers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footerContainer__bot"></div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
