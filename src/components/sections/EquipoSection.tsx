import { Rocket, Code2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const equipo = [
  {
    icon: Rocket,
    name: "Nacho Leo",
    role: "Founder & CEO",
    desc: "Experto en automatizaciones con IA, docente en UDIA. Responsable de arquitectura, QA, plantillas n8n y estrategia comercial.",
  },
  {
    icon: Code2,
    name: "Nahuel Albornoz",
    role: "Co-founder & Product Manager",
    desc: "Científico de datos y desarrollador, especialista en aplicaciones de IA generativa y gestión de producto.",
  },
];

export default function EquipoSection() {
  return (
    <section
      id="equipo"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Nuestro Equipo
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {equipo.map((member, index) => (
            <AnimatedSection
              key={index}
              animation={index === 0 ? "fade-right" : "fade-left"}
              delay={index * 100}
            >
              <div className="h-full p-6 sm:p-8 glass-card rounded-2xl transition-all duration-500 hover:border-purple-400/40 hover:scale-[1.02]">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <member.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                  {member.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
