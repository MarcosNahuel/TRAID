import { Rocket, Code2, Linkedin, ExternalLink } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const equipo = [
  {
    icon: Rocket,
    name: "Nacho Leo",
    role: "Founder & CEO",
    desc: "Experto en automatizaciones con IA, docente en UDIA.",
    skills: ["Arquitectura", "QA", "n8n", "Estrategia"],
    linkedin: "#",
  },
  {
    icon: Code2,
    name: "Nahuel Albornoz",
    role: "Co-founder & Product Manager",
    desc: "Científico de datos y desarrollador especialista en IA generativa.",
    skills: ["Data Science", "IA Generativa", "Producto"],
    linkedin: "#",
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
              <div className="group h-full glass-card rounded-2xl transition-all duration-500 hover:border-purple-400/40 overflow-hidden">
                {/* Main content */}
                <div className="p-6 sm:p-8 text-center relative">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20 scale-100 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-105">
                      <member.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 transition-colors duration-300 group-hover:text-purple-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm sm:text-base mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                    {member.desc}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn link - visible on hover */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
