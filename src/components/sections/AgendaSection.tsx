import AnimatedSection from "../AnimatedSection";
import VideoCalendlyEmbed from "../VideoCalendlyEmbed";

export default function AgendaSection() {
  return (
    <section
      id="agenda"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Agente Shopify - Venta 100% Automática
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="zoom-in" delay={200}>
          <VideoCalendlyEmbed />
        </AnimatedSection>
      </div>
    </section>
  );
}
