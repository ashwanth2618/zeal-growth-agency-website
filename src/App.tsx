import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import { LegalPage, legalDocs } from "./pages/Legal";
import { useHashRoute } from "./components/primitives";

const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ZEAL — Digital Marketing & Growth Agency | Strategy, Performance, Automation",
    description:
      "ZEAL is a specialized digital growth agency building strategy, creative, performance marketing, SEO, AI automation and analytics systems for ambitious businesses.",
  },
  "/about": {
    title: "About ZEAL — A Specialized Growth Partner for Ambitious Businesses",
    description:
      "ZEAL builds digital growth systems combining strategy, creative, performance, technology and measurement. Agency profile, mission, values and client experience.",
  },
  "/capabilities": {
    title: "How We Think — ZEAL Growth Frameworks & Marketing Methodologies",
    description:
      "The frameworks and methodologies ZEAL uses across performance marketing, SEO, CRO, AI automation and marketing analytics — with clearly labelled illustrative concepts.",
  },
};

const legalMeta = (slug: string) => {
  const doc = legalDocs.find((d) => d.slug === slug);
  return {
    title: doc ? `${doc.title} — ZEAL` : "ZEAL",
    description: doc ? doc.intro.slice(0, 155) : "ZEAL legal information.",
  };
};

export default function App() {
  const { route, section } = useHashRoute();

  useEffect(() => {
    const meta = META[route] ?? legalMeta(route);
    document.title = meta.title;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = meta.description;
  }, [route]);

  const render = () => {
    if (route === "/about") return <About />;
    if (route === "/capabilities") return <Capabilities />;
    if (["/privacy", "/terms", "/cookies", "/disclaimer"].includes(route))
      return <LegalPage slug={route} />;
    return <Home />;
  };

  const pageName = route === "/" ? "Home" : route.slice(1).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-white">
      <Nav route={route} />
      <p aria-live="polite" className="sr-only">
        {pageName} page loaded{section ? `, moved to ${section} section` : ""}
      </p>
      <main id="main" tabIndex={-1}>
        {render()}
      </main>
      <Footer />
    </div>
  );
}
