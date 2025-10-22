export default function InformeSection() {
  return (
    <section id="informe" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Recursos sobre IA y Desarrollo
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Explora nuestra biblioteca de recursos sobre inteligencia artificial, herramientas NoCode/LowCode y desarrollo de aplicaciones con LLMs. Aprende a crear agentes inteligentes y soluciones digitales con integración de IA generativa.
          </p>
          
          {/* Reunión 17 de Abril */}
          <div className="bg-gray-800/50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Resumen de la reunión – 17 de abril de 2025
            </h3>
            <p className="text-gray-300 mb-4">
              Primera reunión del grupo de entusiastas en IA generativa y desarrollo. Se abordaron temas de formación en tecnologías emergentes, uso de asistentes de codificación, automatización con herramientas NoCode/LowCode y tendencias del mercado laboral. Se definieron objetivos para conformar una comunidad colaborativa y compartir recursos.
            </p>
            
            <article className="prose prose-neutral max-w-none space-y-4">
              <h3>Detalles ampliados</h3>

              <h4>Minuta temática</h4>
              <ol className="list-decimal pl-4">
                <li><strong>Formación de los participantes:</strong> tres ingresan a la Tecnicatura en Programación (UTN); Yair cursa Ciberseguridad; Nahuel lidera con experiencia en Power&nbsp;BI e IA.</li>
                <li><strong>Agentes de codificación:</strong> revisión de Cursor, Windsurf y GitHub Copilot; ventajas, riesgos y necesidad de pensamiento crítico.</li>
                <li><strong>Automatización low/no‑code:</strong> demostración de n8n + LangChain y casos de uso en chatbots, scraping y flujos con WhatsApp.</li>
                <li><strong>Tendencias y mercado:</strong> adopción acelerada de IA, oportunidades laborales y ejemplos de proyectos freelance pagados.</li>
              </ol>

              <h4>Acuerdos clave</h4>
              <ul className="list-disc pl-4">
                <li>Adaptar el sitio para albergar la comunidad y sus recursos compartidos.</li>
                <li>Distribuir videos introductorios, la guía de agentes IA y esta minuta extendida.</li>
                <li>Fomentar la capacitación continua y el intercambio de novedades en el grupo.</li>
                <li>Integrar a mediano plazo la comunidad de WhatsApp con 400 miembros.</li>
              </ul>

              <h4>Recursos recomendados</h4>
              <ul className="list-disc pl-4">
                <li><a href="https://www.cursor.com/features" target="_blank" rel="noopener">Cursor – AI Code Editor</a></li>
                <li><a href="https://bolt.new/" target="_blank" rel="noopener">Bolt – AI Full‑stack Builder</a></li>
                <li><a href="https://lovable.dev/" target="_blank" rel="noopener">Lovable – AI Product Engineer</a></li>
                <li><a href="https://docs.n8n.io/release-notes/" target="_blank" rel="noopener">n8n LangChain nodes</a></li>
                <li><a href="https://vercel.com/docs/git/vercel-for-github" target="_blank" rel="noopener">Guía Vercel + GitHub</a></li>
              </ul>
            </article>
          </div>
          
          {/* Preview Section */}
          <div className="bg-gray-800/50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Recursos Destacados
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Guías para comenzar con herramientas NoCode/LowCode</li>
              <li>Tutoriales sobre integración de APIs de IA en aplicaciones</li>
              <li>Casos de estudio de implementaciones exitosas</li>
              <li>Mejores prácticas para el desarrollo de agentes inteligentes</li>
              <li>Recursos formativos sobre LLMs y su aplicación práctica</li>
            </ul>
          </div>

          <a
            href="/Recursos de IA para desarrolladores.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            Acceder a la Biblioteca de Recursos
          </a>
          
          <a
            href="/reunion-17-04-2025-detalle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition-colors ml-4"
          >
            Ver detalles completos de la reunión
          </a>
        </div>
      </div>
    </section>
  );
}
