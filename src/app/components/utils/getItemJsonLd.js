
export default function getItemJsonLd(item, category, id) {
  const url = `https://marchantiq.fr/items/${category}/items-details/${id}`;
  const mainImage = Array.isArray(item.img_url) ? item.img_url[0] : item.img_url;

  const additionalProperty = [
    item.state && {
      "@type": "PropertyValue",
      name: "État",
      value: item.state,
    },
    item.matiere && {
      "@type": "PropertyValue",
      name: "Matière",
      value: item.matiere,
    },
    item.style && {
      "@type": "PropertyValue",
      name: "Style",
      value: item.style,
    },
    item.epoque && {
      "@type": "PropertyValue",
      name: "Époque",
      value: item.epoque,
    },
    item.year && {
      "@type": "PropertyValue",
      name: "Année",
      value: item.year,
    },
    item.longeur && {
      "@type": "PropertyValue",
      name: "Longueur",
      value: item.longeur,
    },
    item.largeur && {
      "@type": "PropertyValue",
      name: "Largeur",
      value: item.largeur,
    },
    item.hauteur && {
      "@type": "PropertyValue",
      name: "Hauteur",
      value: item.hauteur,
    },
    item.diam && {
      "@type": "PropertyValue",
      name: "Diamètre",
      value: item.diam,
    },
    item.profondeur && {
      "@type": "PropertyValue",
      name: "Profondeur",
      value: item.profondeur,
    },
    item.category && {
      "@type": "PropertyValue",
      name: "Catégorie",
      value: item.category,
    },
  ].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    url,
    name: item.name,
    description:
      item.description ||
      "Découvrez un objet ancien présenté sur Marchantiq.",
    image: mainImage ? [mainImage] : [],
    sku: item.uuid,
    mpn: item.uuid, // pas obligatoire mais pratique
    material: item.matiere || undefined,
    brand: item.artist
      ? {
          "@type": "Brand",
          name: item.artist,
        }
      : undefined,
    itemCondition: item.isNew
      ? "https://schema.org/NewCondition"
      : "https://schema.org/UsedCondition",
    additionalProperty: additionalProperty.length ? additionalProperty : undefined,
    offers: {
      "@type": "Offer",
      url,
      price: item.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  // on enlève les clés undefined pour garder un JSON propre
  Object.keys(jsonLd).forEach((key) => {
    if (jsonLd[key] === undefined) {
      delete jsonLd[key];
    }
  });

  return jsonLd;
}