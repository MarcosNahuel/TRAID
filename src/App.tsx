import {
  ShoppingCart,
  Store,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Award,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Lightbulb,
  Workflow,
  Code2,
  Briefcase
} from 'lucide-react';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sistemas de IA Generativa que Transforman tu Negocio
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              Multiagentes inteligentes que responden por ti, se integran a tus plataformas y automatizan tu operación – Del servidor al soporte post-producción
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/50"
            >
              Habla con un Experto
            </a>
          </div>
        </section>

        {/* Servicios Destacados */}
        <section id="servicios" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sistemas de IA Generativa y Multiagentes
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
              Implementamos agentes inteligentes que trabajan 24/7, responden a tus clientes, automatizan procesos y se integran perfectamente con tus plataformas existentes
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Users className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Agentes IA Conversacionales</h3>
                <p className="text-gray-300 mb-4">
                  Multiagentes que responden por ti en tiempo real, atienden consultas, califican leads y gestionan interacciones con clientes de forma autónoma.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Atención al cliente 24/7 automatizada</li>
                  <li>• Calificación inteligente de leads</li>
                  <li>• Respuestas contextuales personalizadas</li>
                  <li>• Integración con WhatsApp, Web, Email</li>
                </ul>
              </div>

              <div className="p-8 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Workflow className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Integraciones Inteligentes</h3>
                <p className="text-gray-300 mb-4">
                  Conectamos tus sistemas con IA generativa: Shopify, WooCommerce, Mercado Libre, CRM, ERP. Automatizamos flujos de trabajo complejos.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Sincronización automática entre plataformas</li>
                  <li>• Shopify, WooCommerce, Mercado Libre</li>
                  <li>• Integración con CRM/ERP empresariales</li>
                  <li>• Workflows personalizados con n8n</li>
                </ul>
              </div>

              <div className="p-8 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Code2 className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Desarrollo End-to-End</h3>
                <p className="text-gray-300 mb-4">
                  Desde la configuración del servidor hasta el soporte post-producción. Soluciones completas escalables con tecnología de punta.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Setup completo de infraestructura</li>
                  <li>• Desarrollo con Claude Code & Codex</li>
                  <li>• Deploy y monitoreo continuo</li>
                  <li>• Soporte y mantenimiento incluido</li>
                </ul>
              </div>

              <div className="p-8 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Briefcase className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Consultoría & Escalabilidad</h3>
                <p className="text-gray-300 mb-4">
                  Diseñamos arquitecturas escalables. Trabajamos con n8n hoy, preparados para CrewIA y LangGraph mañana. Tu solución crece contigo.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Arquitectura escalable desde día 1</li>
                  <li>• Migración entre frameworks (n8n, CrewIA, LangGraph)</li>
                  <li>• Optimización de costos de IA</li>
                  <li>• Capacitación de equipos técnicos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Stack Tecnológico
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
              Trabajamos con las tecnologías más avanzadas de IA generativa y automatización
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20 text-center">
                <Workflow className="h-16 w-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-semibold mb-3">n8n</h3>
                <p className="text-gray-300 text-sm">
                  Plataforma principal para workflows de automatización. Conectamos sistemas, APIs y agentes IA en flujos visuales potentes y escalables.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20 text-center">
                <Code2 className="h-16 w-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-semibold mb-3">Claude Code & Codex</h3>
                <p className="text-gray-300 text-sm">
                  Desarrollo asistido por IA. Utilizamos Claude Code y Codex para acelerar el desarrollo y garantizar código limpio y optimizado.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20 text-center">
                <Zap className="h-16 w-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-semibold mb-3">CrewIA & LangGraph</h3>
                <p className="text-gray-300 text-sm">
                  Preparados para frameworks avanzados. Arquitectura escalable que permite migrar y evolucionar según las necesidades de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciadores / Propuesta de Valor */}
        <section id="diferenciadores" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              ¿Por Qué TRAID Agency?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Implementación Completa</h3>
                <p className="text-gray-300 text-sm">
                  Del servidor al soporte post-producción. Nos encargamos de todo el ciclo de vida de tu solución de IA
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 text-center">
                <Users className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Agentes que Trabajan por Ti</h3>
                <p className="text-gray-300 text-sm">
                  Multiagentes inteligentes operando 24/7, respondiendo consultas y automatizando tu operación
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Tecnología Escalable</h3>
                <p className="text-gray-300 text-sm">
                  Arquitecturas preparadas para crecer. De n8n a CrewIA o LangGraph sin reconstruir desde cero
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300 text-center">
                <Shield className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Integraciones Reales</h3>
                <p className="text-gray-300 text-sm">
                  Conectamos con Shopify, WooCommerce, Mercado Libre, CRM, ERP y cualquier plataforma que uses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Éxito Preview */}
        <section id="casos-exito" className="py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Casos de Éxito
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Agentes de IA implementados que generan resultados reales en negocios de LATAM
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <TrendingUp className="h-12 w-12 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">E-commerce Tech</h3>
                <p className="text-purple-300 text-sm mb-4">Retail Online</p>
                <p className="text-gray-300 mb-4">
                  Agente IA atendiendo consultas 24/7, integrado con Shopify y WhatsApp para calificación automática de leads.
                </p>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-2xl font-bold text-green-400">+300%</p>
                  <p className="text-sm text-gray-400">Aumento en respuestas fuera de horario</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <Zap className="h-12 w-12 mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Distribuidor LATAM</h3>
                <p className="text-purple-300 text-sm mb-4">B2B Mayorista</p>
                <p className="text-gray-300 mb-4">
                  Sistema multiagente sincronizando WooCommerce, Mercado Libre y ERP con automatización completa de inventarios.
                </p>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-2xl font-bold text-yellow-400">-70%</p>
                  <p className="text-sm text-gray-400">Reducción en tiempo de gestión manual</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-lg hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <Award className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Agencia Digital</h3>
                <p className="text-purple-300 text-sm mb-4">Servicios Profesionales</p>
                <p className="text-gray-300 mb-4">
                  Agentes conversacionales integrados con CRM, automatizando seguimiento de leads y agendamiento de reuniones.
                </p>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-2xl font-bold text-blue-400">4x</p>
                  <p className="text-sm text-gray-400">Más leads calificados por semana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sobre TRAID Agency
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-300">
                  Construimos Sistemas de IA Generativa que Automatizan tu Operación
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  En TRAID Agency desarrollamos sistemas de inteligencia artificial generativa y multiagentes que transforman la forma en que los negocios operan. No vendemos promesas, implementamos soluciones reales que trabajan por ti 24/7.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fundada en 2023, nos especializamos en crear agentes conversacionales inteligentes que responden consultas, califican leads y automatizan procesos complejos, integrándose perfectamente con tus plataformas: Shopify, WooCommerce, Mercado Libre, CRM y ERP.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Del servidor al soporte post-producción, nos encargamos de todo. Utilizamos n8n para workflows visuales, Claude Code y Codex para desarrollo acelerado, y arquitecturas preparadas para escalar a CrewIA o LangGraph cuando tu negocio lo requiera.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300">
                  <Users className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="font-semibold mb-2">Multiagentes IA</h4>
                  <p className="text-sm text-gray-400">Agentes que responden por ti</p>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300">
                  <Workflow className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="font-semibold mb-2">Automatización</h4>
                  <p className="text-sm text-gray-400">Workflows con n8n</p>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300">
                  <Code2 className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="font-semibold mb-2">Desarrollo IA</h4>
                  <p className="text-sm text-gray-400">Claude Code & Codex</p>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="font-semibold mb-2">Integraciones</h4>
                  <p className="text-sm text-gray-400">E-commerce & CRM/ERP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hablemos de tu Proyecto
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  ¿Listo para automatizar tu negocio con IA? Te ofrecemos una consultoría inicial sin costo para evaluar tu operación y diseñar un sistema de agentes inteligentes a tu medida.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Agenda una videollamada con nuestro equipo para identificar procesos automatizables y definir la mejor estrategia de implementación.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">Operamos en toda LATAM • Remote-first</span>
                  </div>
                  <a
                    href="https://wa.me/5492995904484?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20una%20consultor%C3%ADa%20sobre%20sistemas%20de%20IA%20para%20mi%20negocio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <Phone className="h-6 w-6 text-purple-400 group-hover:text-green-400 transition-colors" />
                    <span>+54 9 299 590-4484</span>
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </a>
                  <a
                    href="mailto:contacto@traidagency.com"
                    className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-purple-400" />
                    <span>contacto@traidagency.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-6">Solicita una Consultoría Gratis</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Correo empresarial"
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Empresa"
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="¿Qué procesos te gustaría automatizar con IA?"
                      rows={4}
                      className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">TRAID Agency</h3>
                <p className="text-gray-400 text-sm">
                  Sistemas de IA generativa y multiagentes para automatizar tu negocio. Del servidor al soporte post-producción.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Servicios</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#servicios" className="hover:text-purple-300 transition-colors">Agentes IA Conversacionales</a></li>
                  <li><a href="#servicios" className="hover:text-purple-300 transition-colors">Integraciones Inteligentes</a></li>
                  <li><a href="#servicios" className="hover:text-purple-300 transition-colors">Desarrollo End-to-End</a></li>
                  <li><a href="#servicios" className="hover:text-purple-300 transition-colors">Consultoría & Escalabilidad</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Empresa</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#sobre-nosotros" className="hover:text-purple-300 transition-colors">Sobre Nosotros</a></li>
                  <li><a href="#casos-exito" className="hover:text-purple-300 transition-colors">Casos de Éxito</a></li>
                  <li><a href="#stack" className="hover:text-purple-300 transition-colors">Stack Tecnológico</a></li>
                  <li><a href="#contacto" className="hover:text-purple-300 transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Tecnologías</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>n8n • Workflows</li>
                  <li>Claude Code & Codex</li>
                  <li>CrewIA & LangGraph</li>
                  <li>APIs & Integraciones</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 TRAID Agency. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton
          phoneNumber="+5492995904484"
          message="Hola! Me gustaría obtener una consultoría sobre sistemas de IA para mi negocio."
        />
      </div>
    </VantaBackground>
  );
}

export default App;