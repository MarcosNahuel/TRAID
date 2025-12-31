import AnimatedSection from "../AnimatedSection";

const faqs = [
  {
    q: "¿Qué plataformas trabajan?",
    a: "Shopify, MercadoLibre, TiendaNube, WooCommerce y marketplaces en general.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Usualmente 30–45 días para el MVP de automatizaciones críticas.",
  },
  {
    q: "¿Qué garantía ofrecen?",
    a: "Si los sistemas no están instalados en 45 días, devolvemos el 100% del dinero (condiciones en contrato).",
  },
  {
    q: "¿Ofrecen soporte post-lanzamiento?",
    a: "Sí. Planes de mantenimiento mensual (MRR) con seguimiento de KPIs y mejoras continuas.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Dudas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Preguntas Frecuentes
          </h2>
        </AnimatedSection>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div className="p-4 sm:p-6 glass-card rounded-2xl transition-all duration-300 hover:border-purple-500/30">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-300">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
