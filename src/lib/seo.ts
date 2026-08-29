import { faqs } from "./faq-data";

export const SITE_URL = "https://flexza.in";
export const SITE_NAME = "Flexza";
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const SITE_LOGO = `${SITE_URL}/favicon.svg`;
export const SITE_EMAIL = "hello@flexza.io";
export const SITE_INSTAGRAM = "https://www.instagram.com/flexza_in/";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  robots?: string;
  ogType?: "website" | "article";
  jsonLd: Record<string, unknown>[];
};

const rajkot = {
  "@type": "City",
  name: "Rajkot",
  containedInPlace: {
    "@type": "State",
    name: "Gujarat",
    containedInPlace: {
      "@type": "Country",
      name: "India",
    },
  },
};

function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    email: SITE_EMAIL,
    sameAs: [SITE_INSTAGRAM],
    areaServed: [rajkot, { "@type": "State", name: "Gujarat" }, { "@type": "Country", name: "India" }],
    description:
      "Digital token and live queue software for small and medium clinics, starting in Rajkot.",
  };
}

function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Queue and patient token management",
    operatingSystem: "Web browser",
    browserRequirements: "Requires JavaScript. Compatible with modern mobile and desktop browsers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/OnlineOnly",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Small and medium clinics",
    },
    areaServed: rajkot,
    description:
      "Flexza helps small and medium clinics in Rajkot manage patient queues with digital tokens, QR booking, live queue tracking, and a simple staff dashboard.",
    featureList: [
      "Digital token booking",
      "Live queue tracking",
      "QR based clinic check-in",
      "OTP verified patients",
      "Clinic queue dashboard",
      "Patient visit history",
    ],
  };
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function breadcrumbJsonLd(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: absoluteUrl(path),
      },
    ],
  };
}

function webPageJsonLd(page: Pick<SeoPage, "path" | "title" | "description">) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
    },
  };
}

export const SEO_PAGES: Record<string, SeoPage> = {
  "/": {
    path: "/",
    title: "Flexza | Queue & Patient Token Management for Clinics in Rajkot",
    description:
      "Flexza is digital queue and patient token software for small and medium clinics in Rajkot. Patients book by QR, track the live queue, and clinics run a calmer front desk.",
    jsonLd: [organizationJsonLd(), softwareJsonLd(), websiteJsonLd(), faqJsonLd()],
  },
  "/about": {
    path: "/about",
    title: "About Flexza | Queue Software for Small & Medium Clinics in Rajkot",
    description:
      "Flexza is building calmer clinic queues for small and medium practices in Rajkot. Digital tokens, live queue updates, and less work at reception.",
    jsonLd: [organizationJsonLd(), breadcrumbJsonLd("About", "/about"), webPageJsonLd({
      path: "/about",
      title: "About Flexza",
      description:
        "Flexza is building calmer clinic queues for small and medium practices in Rajkot.",
    })],
  },
  "/contact": {
    path: "/contact",
    title: "Contact Flexza | Book a Clinic Queue Demo in Rajkot",
    description:
      "Talk to Flexza about digital tokens and live queue management for your clinic in Rajkot. Book a walkthrough for small and medium clinic teams.",
    jsonLd: [
      organizationJsonLd(),
      breadcrumbJsonLd("Contact", "/contact"),
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Flexza",
        url: absoluteUrl("/contact"),
        inLanguage: "en-IN",
        about: { "@type": "Organization", name: SITE_NAME, email: SITE_EMAIL },
      },
    ],
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Flexza",
    description:
      "How Flexza collects and uses clinic and patient information for queue booking, live token updates, and secure access.",
    jsonLd: [organizationJsonLd(), breadcrumbJsonLd("Privacy Policy", "/privacy-policy")],
  },
  "/terms-of-service": {
    path: "/terms-of-service",
    title: "Terms of Service | Flexza",
    description:
      "Terms for using Flexza digital token and live queue management for clinics and patients.",
    jsonLd: [organizationJsonLd(), breadcrumbJsonLd("Terms of Service", "/terms-of-service")],
  },
  "/thank-you": {
    path: "/thank-you",
    title: "Thank You | Flexza",
    description: "Your Flexza demo request was submitted. Our team will contact you shortly.",
    robots: "noindex, nofollow",
    jsonLd: [organizationJsonLd()],
  },
};

export const SEO_PAGE_LIST = Object.values(SEO_PAGES);

export function getSeoPage(pathname: string): SeoPage {
  if (SEO_PAGES[pathname]) return SEO_PAGES[pathname];
  return {
    ...SEO_PAGES["/"],
    path: pathname,
    robots: "noindex, follow",
    jsonLd: [],
  };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function jsonLdGraph(entries: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": entries.map((entry) => {
      const next = { ...entry };
      delete next["@context"];
      return next;
    }),
  };
}

export function buildSeoHeadInner(page: SeoPage) {
  const url = absoluteUrl(page.path);
  const robots = page.robots ?? "index, follow";
  const ogType = page.ogType ?? "website";
  const jsonLd = JSON.stringify(jsonLdGraph(page.jsonLd)).replaceAll("<", "\\u003c");

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<meta name="author" content="${SITE_NAME}" />`,
    `<meta name="geo.region" content="IN-GJ" />`,
    `<meta name="geo.placename" content="Rajkot" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en-IN" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_OG_IMAGE}" />`,
    `<meta property="og:image:alt" content="Flexza digital queue and token management for clinics in Rajkot" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${SITE_OG_IMAGE}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
}
