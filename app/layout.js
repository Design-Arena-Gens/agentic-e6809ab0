import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "ICEEM | Ingénierie & Expertise Maritime",
  description:
    "ICEEM accompagne les acteurs maritimes et industriels avec des solutions d'ingénierie, de maintenance et de sécurité de haut niveau.",
  icons: {
    icon: "https://iceem.tn/favicon.ico"
  },
  openGraph: {
    title: "ICEEM | Ingénierie & Expertise Maritime",
    description:
      "Solutions innovantes pour la maintenance et la sécurité des environnements maritimes et industriels.",
    url: "https://iceem.tn",
    siteName: "ICEEM",
    images: [
      {
        url: "https://static.wixstatic.com/media/f2d0cd_ea4a356ff333426f82ad6bb6021dec33~mv2.png/v1/fill/w_1200,h_630,al_c,lg_1,q_85/og.png",
        width: 1200,
        height: 630,
        alt: "ICEEM - Ingénierie et Expertise Maritime"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ICEEM | Ingénierie & Expertise Maritime",
    description:
      "Solutions innovantes pour la maintenance et la sécurité des environnements maritimes et industriels.",
    images: ["https://static.wixstatic.com/media/f2d0cd_ea4a356ff333426f82ad6bb6021dec33~mv2.png/v1/fill/w_1200,h_630,al_c,lg_1,q_85/og.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={plexSans.className}>
        <div className="page-root">{children}</div>
      </body>
    </html>
  );
}
