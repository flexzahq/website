import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoPage, jsonLdGraph, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "../../lib/seo";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) element.setAttribute("hreflang", hreflang);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function SeoManager() {
  const { pathname } = useLocation();
  const page = getSeoPage(pathname);
  const url = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = page.title;
    document.documentElement.lang = "en-IN";

    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.robots ?? "index, follow");
    setMeta("name", "author", SITE_NAME);
    setMeta("name", "geo.region", "IN-GJ");
    setMeta("name", "geo.placename", "Rajkot");

    setLink("canonical", url);
    setLink("alternate", url, "en-IN");
    setLink("alternate", url, "x-default");

    setMeta("property", "og:type", page.ogType ?? "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", SITE_OG_IMAGE);
    setMeta("property", "og:image:alt", "Flexza digital queue and token management for clinics in Rajkot");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", SITE_OG_IMAGE);

    let script = document.getElementById("flexza-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "flexza-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdGraph(page.jsonLd));
  }, [page, url]);

  return null;
}
