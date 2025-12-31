import { MessageCircle, Workflow, Users } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const pilares = [
  {
    icon: MessageCircle,
    title: "Canales de venta y notificaciones",
    description:
      "Automatizamos la comunicación comercial: secuencias de WhatsApp, sistema de mensajería Mercado Libre, recuperación de carritos, lead scoring y sincronización con CRMs y marketplaces. Resultado: más conversión y menos trabajo manual.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones internas",
    description:
      "Flujos que reducen errores y tiempo operativo: sincronización de stock, remitos, picking, conciliaciones y tareas repetitivas mediante n8n, APIs y RPA ligero.",
  },
  {
    icon: Users,
    title: "Consultoría y capacitación",
    description:
      "Transferencia de conocimiento: capacitaciones, playbooks, SOPs y prompt-tuning para que tu equipo sea autónomo y mantenga los sistemas sin depender de terceros.",
  },
];

export default function PilaresSection() {
  return (
    <section
      id="pilares"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Nuestros Pilares
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pilares.map((pilar, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="h-full p-6 sm:p-8 glass-card rounded-2xl transition-all duration-500 group hover:scale-[1.02]">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <pilar.icon className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-200 transition-colors">
                  {pilar.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {pilar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
