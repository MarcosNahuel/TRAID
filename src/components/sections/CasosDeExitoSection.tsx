import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { caseStudies } from "../../data/caseStudies";
import { CaseStudy } from "../../types";

type Props = {
  onOpenCase: (caseStudy: CaseStudy) => void;
};

export default function CasosDeExitoSection({ onOpenCase }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount =
        container.clientWidth /
        (window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="casos"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/40 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Resultados Comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Casos de éxito
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Selecciona un caso para abrir su dashboard interactivo con
            resultados antes y después del agente.
          </p>
        </AnimatedSection>

        <div className="relative group px-4 sm:px-12">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 hover:bg-purple-900/80 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 border border-purple-500/30 hidden sm:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {caseStudies.map((study, index) => (
              <AnimatedSection
                key={study.id}
                animation="fade-up"
                delay={index * 100}
                className="flex-none w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.33rem)] snap-center"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className={`case-card h-full p-6 sm:p-8 rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/60 ${study.cardBackground} flex flex-col`}
                  onClick={() => onOpenCase(study)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onOpenCase(study);
                    }
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
                  }}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-black/30">
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold break-words">
                          {study.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-300 uppercase tracking-wide">
                          Caso #{(index + 1).toString().padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs sm:text-sm text-gray-300 bg-black/30 border border-purple-500/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="bg-black/30 p-3 sm:p-4 rounded-xl mb-6 border border-white/5">
                      <p
                        className={`text-2xl sm:text-3xl font-bold ${study.highlight.colorClass} stat-number`}
                      >
                        {study.highlight.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {study.highlight.label}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/30 group"
                      onClick={(event) => {
                        event.stopPropagation();
                        onOpenCase(study);
                      }}
                    >
                      Ver dashboard
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 hover:bg-purple-900/80 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 border border-purple-500/30 hidden sm:flex"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
