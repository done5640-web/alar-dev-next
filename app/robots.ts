import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://alardev.al/sitemap.xml",
    host: "https://alardev.al",
  };
}
