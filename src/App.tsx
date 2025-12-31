import { useState, useEffect } from "react";

// Layout components
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
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
      <div className="min-h-screen text-white">
        <Navbar />

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
