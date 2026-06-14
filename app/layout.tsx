import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export const metadata: Metadata = {
  title: { default: "ALAR DEV — Software Studio", template: "%s | ALAR DEV" },
  description: "Creating web and mobile applications that turn startups and businesses into industry leaders.",
  metadataBase: new URL("https://alar.dev"),
  openGraph: {
    siteName: "ALAR DEV",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          <div id="scroll-progress" />
          <div id="cursor" />
          <Nav />
          <main>{children}</main>
          <Footer />
          <ClientEffects />
        </I18nProvider>
      </body>
    </html>
  );
}
