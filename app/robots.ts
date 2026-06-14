import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://alar.dev/sitemap.xml",
    host: "https://alar.dev",
  };
}
