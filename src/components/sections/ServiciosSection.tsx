import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const servicios = [
  {
    title: "Auditoría y mapa",
    desc: "Auditoría y mapa de cuellos de botella",
  },
  {
    title: "MVP de automatizaciones",
    desc: "Diseño y entrega del MVP (WhatsApp, carritos, CRM)",
  },
  {
    title: "Automatización de ventas total",
    desc: "Captura, calificación, nurturing y handoff al vendedor",
  },
  {
    title: "Dashboard con KPIs",
    desc: "Dashboard con KPIs clave y capacitación al equipo",
  },
  {
    title: "Documentación y SOPs",
    desc: "Documentación, SOPs y plan de mantenimiento",
  },
];

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Qué incluimos
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            MVP de automatizaciones entregado y operativo
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicios.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 50}
              className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="h-full p-4 sm:p-6 glass-card rounded-2xl transition-all duration-300 hover:border-green-500/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
