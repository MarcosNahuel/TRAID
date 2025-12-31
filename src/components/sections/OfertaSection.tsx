import { Shield } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function OfertaSection() {
  return (
    <section
      id="oferta"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Propuesta de Valor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Nuestra Oferta
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
            Implementamos los flujos críticos de ventas y backoffice con n8n
            y agentes de IA. En 7 días tenés un piloto controlado; en ≤45
            días salimos a producción con tablero de KPIs. Trabajamos con
            alcance cerrado, métricas claras y sin sorpresas.
          </p>
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
            <span className="text-lg sm:text-xl font-semibold gradient-text">
              Garantizamos entrega en 45 días
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
