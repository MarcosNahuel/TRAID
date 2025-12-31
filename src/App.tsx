import { useState } from "react";

// Layout components
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";
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
