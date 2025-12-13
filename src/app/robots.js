export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/auth",        
          "/admin",       
          "/api",        
        ],
      },
    ],
    sitemap: "https://marchantiq.fr/sitemap.xml",
  };
}