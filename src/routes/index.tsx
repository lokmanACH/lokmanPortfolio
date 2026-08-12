import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Certificates } from "@/sections/Certificates";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
import { profile } from "@/data/portfolio";

const title = `${profile.name} — ${profile.role}`;
const description = profile.tagline;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: profile.location,
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
