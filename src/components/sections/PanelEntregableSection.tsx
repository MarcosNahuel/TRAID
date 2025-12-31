import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function PanelEntregableSection() {
  const tags = [
    { label: "Control de Preventa", color: "indigo" },
    { label: "Control de Postventa", color: "violet" },
    { label: "Dashboard Analytics", color: "purple" },
    { label: "3 Agentes IA", color: "pink" },
    { label: "Soporte Automatizado", color: "cyan" },
  ];

  return (
    <section
      id="panel-entregable"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Panel Entregable
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-2">
            Demo interactivo del CRM Postventa con Agentes IA
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Panel de control con métricas en tiempo real, pruebas de agentes
            IA y sistema de contestaciones automáticas.
          </p>
        </AnimatedSection>

        {/* Tags de funcionalidades */}
        <AnimatedSection animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-3 mb-8">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-4 py-2 text-sm font-medium text-${tag.color}-300 bg-${tag.color}-900/40 border border-${tag.color}-500/30 rounded-full backdrop-blur-sm`}
            >
              {tag.label}
            </span>
          ))}
        </AnimatedSection>

        {/* Iframe Preview */}
        <AnimatedSection animation="zoom-in" delay={200}>
          <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 glass-card">
            <div className="bg-gradient-to-r from-indigo-900/90 to-violet-900/90 px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-300 ml-2">
                  crm-postventa-demo.vercel.app
                </span>
              </div>
              <a
                href="https://crm-postventa-demo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
              >
                Abrir en nueva pestaña
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-white">
              <iframe
                src="https://crm-postventa-demo.vercel.app/"
                className="w-full h-full border-none"
                title="CRM Postventa Demo - MarIA S.A."
                allow="clipboard-write"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
