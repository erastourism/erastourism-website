import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erastourism.com"),
  title: "Plan a Trip to Odisha | ERAS Tourism",
  description:
    "Plan an Odisha trip with ERAS Tourism. Explore locally planned tours for pilgrimage, nature, culture, heritage and hidden destinations across Odisha.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ERAS Tourism",
    locale: "en_IN",
    title: "Plan a Trip to Odisha | ERAS Tourism",
    description:
      "Explore locally planned Odisha tours for pilgrimage, nature, culture, heritage and hidden destinations.",
    images: [
      {
        url: "/wildlife/bhitarkanika-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Mangrove waterways in Bhitarkanika, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan a Trip to Odisha | ERAS Tourism",
    description:
      "Explore locally planned Odisha tours for pilgrimage, nature, culture, heritage and hidden destinations.",
    images: ["/wildlife/bhitarkanika-banner.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://erastourism.com/#travel-agency",
      name: "ERAS Tourism",
      url: "https://erastourism.com/",
      logo: "https://erastourism.com/Eras_Logo.png",
      description:
        "An Odisha-based holiday idea company helping travellers rediscover nature, culture, pilgrimage, heritage and hidden destinations across Odisha.",
      email: "tourism.eras@gmail.com",
      telephone: "+917749074686",
      parentOrganization: {
        "@type": "Organization",
        name: "ERAS Creative & Tourism Service",
      },
      areaServed: {
        "@type": "State",
        name: "Odisha",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 1297/2098, Lane No. 7, Mallick Complex, Jagamara",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://erastourism.com/#website",
      url: "https://erastourism.com/",
      name: "ERAS Tourism",
      publisher: { "@id": "https://erastourism.com/#travel-agency" },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
