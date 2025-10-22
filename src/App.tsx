import { 
  Brain, 
  Bot, 
  Code, 
  Code2, 
  Lightbulb, 
  MapPin, 
  Mail, 
  Phone, 
  Puzzle, 
  Settings, 
  Terminal, 
  Workflow,
  MessageCircle,
  Share2,
  Users,
  Blocks
} from 'lucide-react';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import InformeSection from './components/InformeSection';

function App() {
  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />
        
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Comunidad HM: Explorando el Potencial de la Inteligencia Artificial
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              Compartimos recursos y conocimientos sobre IA, herramientas NoCode/LowCode, desarrollo full stack con LLMs y creación de agentes inteligentes
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Únete a nuestra comunidad
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-nosotros" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sobre Nosotros
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  En Comunidad HM, nuestra misión es democratizar el acceso al conocimiento sobre inteligencia artificial y facilitar su implementación en proyectos de todo tipo. Nos dedicamos a compartir recursos, herramientas y metodologías que potencian el desarrollo de soluciones innovadoras.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nuestra comunidad reúne a entusiastas, desarrolladores y profesionales interesados en explorar el potencial de las tecnologías NoCode, LowCode, asistentes de codificación y plataformas de IA generativa para crear aplicaciones y agentes inteligentes.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Creemos en el aprendizaje colaborativo y el intercambio de conocimientos como pilares fundamentales para impulsar la innovación en el campo de la inteligencia artificial.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300 transform hover:-translate-y-1">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold">Conocimiento</h3>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300 transform hover:-translate-y-1">
                  <Share2 className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold">Colaboración</h3>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300 transform hover:-translate-y-1">
                  <Users className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold">Comunidad</h3>
                </div>
                <div className="p-6 bg-purple-900/30 rounded-lg text-center hover:bg-purple-800/40 transition-all duration-300 transform hover:-translate-y-1">
                  <Blocks className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold">Innovación</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objetivos" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestros Objetivos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Share2 className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Compartir Recursos</h3>
                <p className="text-gray-300">Proporcionar acceso a herramientas, tutoriales y materiales educativos sobre IA, NoCode y LowCode para todos los miembros de la comunidad.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Users className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Construir Comunidad</h3>
                <p className="text-gray-300">Crear un espacio de colaboración donde los entusiastas de la IA puedan conectar, compartir experiencias y aprender juntos.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Code className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Facilitar el Desarrollo</h3>
                <p className="text-gray-300">Simplificar el proceso de creación de aplicaciones y agentes de IA mediante metodologías accesibles y eficientes.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Workflow className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Promover la Innovación</h3>
                <p className="text-gray-300">Fomentar la experimentación con nuevas tecnologías de IA y métodos de desarrollo que impulsen soluciones creativas.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Lightbulb className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Educación Continua</h3>
                <p className="text-gray-300">Ofrecer oportunidades de aprendizaje constante a través de talleres, webinars y recursos actualizados sobre las últimas tendencias en IA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Recursos y Actividades
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Bot className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Desarrollo de Agentes de IA</h3>
                <p className="text-gray-300">Guías y tutoriales para crear agentes inteligentes personalizados que automatizan tareas y mejoran procesos de negocio y personales.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Code className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Herramientas NoCode y LowCode</h3>
                <p className="text-gray-300">Recursos sobre plataformas que permiten crear aplicaciones sin necesidad de programación avanzada, integrando capacidades de IA.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Terminal className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Talleres y Webinars</h3>
                <p className="text-gray-300">Sesiones prácticas y educativas sobre desarrollo full stack con LLMs, integración de IA generativa y creación de soluciones digitales avanzadas.</p>
              </div>
              <div className="p-6 bg-purple-900/30 rounded-lg hover:bg-purple-800/40 transition-all duration-300">
                <Workflow className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">Proyectos Colaborativos</h3>
                <p className="text-gray-300">Iniciativas comunitarias para desarrollar soluciones de código abierto que aprovechen el potencial de la IA generativa y los asistentes de codificación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Informe Section */}
        <InformeSection />

        {/* Contact Section */}
        <section id="contacto" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Únete a la Comunidad
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  ¿Interesado en la inteligencia artificial y sus aplicaciones? ¿Quieres aprender a desarrollar con herramientas NoCode/LowCode o crear agentes de IA? Únete a nuestra comunidad y comienza a explorar el fascinante mundo de la IA.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">Comunidad global (Virtual)</span>
                  </div>
                  <a 
                    href="https://wa.me/5492615181225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <Phone className="h-6 w-6 text-purple-400 group-hover:text-green-400 transition-colors" />
                    <span>+54 9 261 518-1225</span>
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </a>
                  <a 
                    href="mailto:contacto@comunidadhm.com" 
                    className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-purple-400" />
                    <span>contacto@comunidadhm.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>© 2025 Comunidad HM. Todos los derechos reservados.</p>
          </div>
        </footer>

        {/* Floating WhatsApp AI Agent Button */}
        <WhatsAppButton 
          phoneNumber="+5492617131433" 
          message="Hola! Me gustaría obtener más información sobre la Comunidad HM y sus recursos de IA."
        />
      </div>
    </VantaBackground>
  );
}

export default App;