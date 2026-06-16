"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

const TITLES: Record<string, { en: string; sq: string }> = {
  "/": { en: "ALAR DEV — Software Studio | Web Development & Apps Albania", sq: "ALAR DEV — Studio Software | Krijim Website & Aplikacione Shqipëri" },
  "/about": { en: "About Us | ALAR DEV", sq: "Rreth Nesh | ALAR DEV" },
  "/services": { en: "Services | ALAR DEV", sq: "Shërbimet | ALAR DEV" },
  "/projects": { en: "Projects | ALAR DEV", sq: "Projektet | ALAR DEV" },
  "/blog": { en: "Blog | ALAR DEV", sq: "Blog | ALAR DEV" },
  "/contact": { en: "Contact | ALAR DEV", sq: "Kontakt | ALAR DEV" },
};

export default function DynamicTitle() {
  const pathname = usePathname();
  const { lang } = useLang();

  useEffect(() => {
    const entry = TITLES[pathname];
    if (entry) document.title = entry[lang];
  }, [pathname, lang]);

  return null;
}
