import AnimatedSection from "../AnimatedSection";

const fases = [
  {
    step: 1,
    title: "Discovery",
    week: "Semana 1",
    desc: "Auditoría inicial, relevamiento de procesos, métricas clave y configuración de accesos.",
  },
  {
    step: 2,
    title: "Pruebas",
    week: "Semana 2",
    desc: "Desarrollo e implementación del MVP. Testing controlado y ajustes iterativos.",
  },
  {
    step: 3,
    title: "Producción",
    week: "Semanas 3-4",
    desc: "Go-live, monitoreo activo, optimización continua y capacitación del equipo.",
  },
];

export default function MetodologiaSection() {
  return (
    <section
      id="metodologia"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Proceso Probado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Metodología Ágil
          </h2>
        </AnimatedSection>

        {/* Timeline with connecting line */}
        <div className="relative">
          {/* Connecting line - only visible on lg screens */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[16.666%] right-[16.666%] h-[2px] bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-purple-600/50" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {fases.map((phase, index) => (
              <AnimatedSection
                key={index}
                animation="scale-up"
                delay={index * 150}
              >
                <div className="relative h-full p-4 sm:p-6 glass-card rounded-2xl text-center transition-all duration-300 hover:border-purple-500/40 group">
                  {/* Step number with pulse effect on hover */}
                  <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg sm:text-xl mb-4 shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-ping opacity-0 group-hover:opacity-20" />
                    {phase.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-purple-300">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300 mb-3">
                    {phase.week}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {phase.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-up" delay={300} className="mt-6 sm:mt-8">
          <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 text-center backdrop-blur-sm">
            <h4 className="text-base sm:text-lg font-semibold mb-2 gradient-text">
              Mantenimiento
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Reporte mensual, mejoras, soporte y capacitación (MRR
              opcional)
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
