import { useState, useEffect } from "react";

// Layout components
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import CaseModal from "./components/CaseModal";

// Section components
import {
  HeroSection,
  CasosDeExitoSection,
  PanelEntregableSection,
  AgendaSection,
  QueHacemosSection,
  PilaresSection,
  OfertaSection,
  ServiciosSection,
  MetodologiaSection,
  EquipoSection,
  FAQSection,
  FooterSection,
} from "./components/sections";

// Types
import { CaseStudy } from "./types";

function App() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(() => {
    // Solo mostrar loading en la primera visita de la sesión
    const hasVisited = sessionStorage.getItem('traid-visited');
    return !hasVisited;
  });

  useEffect(() => {
    if (!isLoading) {
      sessionStorage.setItem('traid-visited', 'true');
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} duration={2000} />;
  }

  return (
    <VantaBackground>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      <ScrollProgress />
      <CursorGlow />
      <div className="min-h-screen text-white">
        <Navbar />

        <main id="main-content">
          <HeroSection />

          <CasosDeExitoSection onOpenCase={setActiveCase} />

          <div className="section-divider" />

          <PanelEntregableSection />

          <AgendaSection />

          <div className="section-divider" />

          <QueHacemosSection />

          <PilaresSection />

          <OfertaSection />

          <ServiciosSection />

          <div className="section-divider" />

          <MetodologiaSection />

          <EquipoSection />

          <div className="section-divider" />

          <FAQSection />
        </main>

        <FooterSection />
      </div>

      {/* Case Study Modal */}
      {activeCase && (
        <CaseModal
          caseStudy={activeCase}
          onClose={() => setActiveCase(null)}
        />
      )}

      <WhatsAppButton phoneNumber="5491136579967" />
    </VantaBackground>
  );
}

export default App;
