import AnimatedSection from "../AnimatedSection";

export default function QueHacemosSection() {
  return (
    <section
      id="que-hacemos"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Nuestra Especialidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 gradient-text">
            ¿Qué hacemos?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Diseñamos e implementamos soluciones de automatización e
            inteligencia artificial especializadas en ecommerce: integración
            de canales (WhatsApp, Instagram, MercadoLibre, Shopify,
            TiendaNube, WooCommerce),{" "}
            <span className="text-purple-400 font-semibold">
              automatización de ventas total
            </span>
            , recuperación de carritos, orquestación de procesos con n8n y
            optimización de logística y fulfillment. También trabajamos
            procesos internos: conciliaciones, control de stock y
            sincronización multicanal.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
