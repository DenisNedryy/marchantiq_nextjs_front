// app/sitemap.js

import { getItemsByCategory } from "./services/items";
import { getNews } from "./services/news"; 
import { HOST } from "./host";

const baseUrl = HOST;

const categorySlugMap = [
  "furniture",
  "knick-knacks",
  "militaria",
  "books",
  "numismatics",
  "paintings",
  "postcards",
  "miscellaneous",
];

const categoryMapForDB = {
  "furniture": "mobilier",
  "knick-knacks": "bibelot",
  "militaria": "militaria",
  "books": "livre",
  "numismatics": "numismatique",
  "paintings": "tableau",
  "postcards": "carte-postale",
  "miscellaneous": "divers",
};

export default async function sitemap() {
  // Pages statiques
  const staticRoutes = [
    "",
    "/presentation",
    "/contact",
    "/le-coin-des-collectionneurs",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Pages catégories items
  const categoryRoutes = categorySlugMap.map((slug) => ({
    url: `${baseUrl}/items/${slug}`,
    lastModified: new Date(),
  }));

  // Pages items (fiches produit)
  let itemsRoutes = [];
  try {
    const allItems = [];

    // on récupère les items par catégorie
    for (const [slug, dbCategory] of Object.entries(categoryMapForDB)) {
      const res = await getItemsByCategory(dbCategory);
      const items = res?.items || [];
      items.forEach((item) => {
        allItems.push({
          uuid: item.uuid,
          categorySlug: slug,
        });
      });
    }

    itemsRoutes = allItems.map((item) => ({
      url: `${baseUrl}/items/${item.categorySlug}/items-details/${item.uuid}`,
      lastModified: new Date(),
    }));
  } catch (e) {
    itemsRoutes = [];
  }

  // Pages articles (actualités)
  let newsRoutes = [];
  try {
    const res = await getNews(); 
    const news = res?.news || res?.allNews || res || [];

    newsRoutes = news.map((n) => ({
      url: `${baseUrl}/news/news-details/${n.uuid}`,
      lastModified: new Date(),
    }));
  } catch (e) {
    newsRoutes = [];
  }

  return [...staticRoutes, ...categoryRoutes, ...itemsRoutes, ...newsRoutes];
}
