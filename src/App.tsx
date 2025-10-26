import { useState } from 'react';
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
  Briefcase,
  Target,
  Rocket,
  CheckCircle2,
  UserCheck,
  ChevronDown,
  BarChart3,
  X
} from 'lucide-react';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ROHANADashboard from './components/ROHANADashboard';
import DashboardTest from './components/DashboardTest';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Subite a la ola y escala tu E-Commerce con IA
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-gray-300 font-semibold">
              Menos cuellos de botella, más conversiones. Instalación rápida, tablero de KPIs y soporte continuo.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/5492995904484?text=Hola%21%20Me%20gustar%C3%ADa%20obtener%20una%20consultor%C3%ADa%20sobre%20automatizaciones%20con%20IA%20para%20mi%20ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
              >
                🚀 Contacta con nosotros
              </a>
            </div>
          </div>
        </section>

        {/* Qué Hacemos */}
        <section id="que-hacemos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Diseñamos e implementamos soluciones de automatización e inteligencia artificial especializadas en ecommerce: integración de canales (WhatsApp, Instagram, MercadoLibre, Shopify, TiendaNube, WooCommerce), <strong>automatización de ventas total</strong>, recuperación de carritos, orquestación de procesos con n8n y optimización de logística y fulfillment. También trabajamos procesos internos: conciliaciones, control de stock y sincronización multicanal.
            </p>
          </div>
        </section>

        {/* Pilares */}
        <section id="pilares" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestros Pilares
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <MessageCircle className="h-14 w-14 mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Canales de venta y notificaciones</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatizamos la comunicación comercial: secuencias de WhatsApp, sistema de mensajería Mercado Libre, recuperación de carritos, lead scoring y sincronización con CRMs y marketplaces. Resultado: más conversión y menos trabajo manual.
                </p>
              </div>

              <div className="p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Workflow className="h-14 w-14 mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Automatizaciones internas</h3>
                <p className="text-gray-300 leading-relaxed">
                  Flujos que reducen errores y tiempo operativo: sincronización de stock, remitos, picking, conciliaciones y tareas repetitivas mediante n8n, APIs y RPA ligero.
                </p>
              </div>

              <div className="p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Users className="h-14 w-14 mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-2xl font-semibold mb-4">Consultoría y capacitación</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transferencia de conocimiento: capacitaciones, playbooks, SOPs y prompt-tuning para que tu equipo sea autónomo y mantenga los sistemas sin depender de terceros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestra Oferta
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Implementamos los flujos críticos de ventas y backoffice con n8n y agentes de IA. En 7 días tenés un piloto controlado; en ≤45 días salimos a producción con tablero de KPIs. Trabajamos con alcance cerrado, métricas claras y sin sorpresas.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/20 border border-purple-500/50 rounded-full">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-semibold">Garantizamos entrega en 45 días</span>
            </div>
          </div>
        </section>

        {/* Lo que incluye (45 días) */}
        <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Que incluimos
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">MVP de automatizaciones entregado y operativo</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Auditoría y mapa</h3>
                    <p className="text-gray-400 text-sm">Auditoría y mapa de cuellos de botella</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">MVP de automatizaciones</h3>
                    <p className="text-gray-400 text-sm">Diseño y entrega del MVP (WhatsApp, carritos, CRM)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Automatización de ventas total</h3>
                    <p className="text-gray-400 text-sm">Captura, calificación, nurturing y handoff al vendedor</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dashboard con KPIs</h3>
                    <p className="text-gray-400 text-sm">Dashboard con KPIs clave y capacitación al equipo</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 md:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Documentación y SOPs</h3>
                    <p className="text-gray-400 text-sm">Documentación, SOPs y plan de mantenimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section id="metodologia" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Metodología Ágil
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg mb-3">1</div>
                  <h3 className="text-xl font-semibold">Discovery</h3>
                  <p className="text-sm text-purple-300">Semana 1</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  30' call, checklist, métricas y accesos. Ajuste de credenciales y configuraciones iniciales.
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg mb-3">2</div>
                  <h3 className="text-xl font-semibold">Propuesta y diseño</h3>
                  <p className="text-sm text-purple-300">Semana 2</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Alcance, entregables y cronograma. Entrega piloto para testing.
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg mb-3">3</div>
                  <h3 className="text-xl font-semibold">Implementación</h3>
                  <p className="text-sm text-purple-300">Semanas 3-4</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Flujos n8n, integraciones, pruebas y prompt tuning
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg mb-3">4</div>
                  <h3 className="text-xl font-semibold">Go-Live & Hypercare</h3>
                  <p className="text-sm text-purple-300">semana 5-6</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Monitoreo, ajustes y transferencia. Capacitación.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-2xl border border-purple-500/30 text-center">
              <h4 className="text-lg font-semibold mb-2">Mantenimiento</h4>
              <p className="text-gray-400">Reporte mensual, mejoras, soporte y capacitación (MRR opcional)</p>
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Casos de Éxito
            </h2>

            {/* Botón grande para ver el dashboard */}
            <div className="mb-12 text-center">
              <button
                onClick={() => {
                  console.log('Botón clickeado, abriendo dashboard...');
                  setShowDashboard(true);
                }}
                className="group relative inline-flex items-center gap-4 px-12 py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
              >
                <BarChart3 className="h-10 w-10 animate-pulse" />
                <span>VER CASO DE ÉXITO REAL</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </button>
              <p className="mt-4 text-gray-400 text-sm">Dashboard interactivo con métricas reales de uno de nuestros clientes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <ShoppingCart className="h-12 w-12 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">Recupero de carritos</h3>
                <p className="text-gray-300 mb-4">
                  +28% en recuperación en 30 días con secuencia de WhatsApp integrada.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-green-400">+28%</p>
                  <p className="text-sm text-gray-400">Recuperación en 30 días</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <Workflow className="h-12 w-12 mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Automatización logística</h3>
                <p className="text-gray-300 mb-4">
                  Sincronización multicanal y reducción de errores de picking en 75%.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-400">-75%</p>
                  <p className="text-sm text-gray-400">Errores de picking</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl hover:from-purple-800/50 hover:to-purple-800/30 transition-all duration-300 border border-purple-500/20">
                <Target className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Automatización de ventas total</h3>
                <p className="text-gray-300 mb-4">
                  Liberó 3 horas/día del equipo comercial antes del cierre.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-400">3h/día</p>
                  <p className="text-sm text-gray-400">Tiempo liberado del equipo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal del Dashboard */}
        {showDashboard && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowDashboard(false);
              }
            }}
          >
            <div className="relative w-full max-w-[95vw] max-h-[95vh] bg-gradient-to-br from-[#0a0e1a] to-[#141829] rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30">
              {/* Header del Dashboard */}
              <div className="sticky top-0 z-[10001] bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm px-8 py-4 border-b border-purple-500/30 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Dashboard Analytics ROHANA</h2>
                  <p className="text-sm text-purple-300">Caso de éxito real - Métricas verificadas</p>
                </div>

                {/* Botón cerrar */}
                <button
                  onClick={() => {
                    console.log('Cerrando dashboard...');
                    setShowDashboard(false);
                  }}
                  className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-110"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Contenedor del dashboard con scroll */}
              <div className="w-full h-[85vh] overflow-y-auto p-8 bg-[#0a0e1a]">
                <ROHANADashboard />
              </div>
            </div>
          </div>
        )}

        {/* Debug: Mostrar estado */}
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-[10001]">
          Dashboard: {showDashboard ? 'ABIERTO' : 'CERRADO'}
        </div>

        {/* Equipo */}
        <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestro Equipo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <UserCheck className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Nacho Leo</h3>
                  <p className="text-purple-300 font-medium">Líder técnico</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Experto en automatizaciones con IA, docente en UDIA. Responsable de arquitectura, QA y plantillas n8n.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Code2 className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Nahuel Albornoz</h3>
                  <p className="text-purple-300 font-medium">Data & GenAI Ops</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Científico de datos y desarrollador, especialista en aplicaciones de IA generativa.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Ignacio Ana</h3>
                  <p className="text-purple-300 font-medium">Growth & Ecommerce</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Especialista en ecommerce y marketing. Responsable de estrategia comercial, generación de leads y contenidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">¿Qué plataformas trabajan?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Shopify, MercadoLibre, TiendaNube, WooCommerce y marketplaces en general.
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">¿Cuánto tarda la implementación?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Usualmente 30–45 días para el MVP de automatizaciones críticas.
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">¿Qué garantía ofrecen?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Si los sistemas no están instalados en 45 días, devolvemos el 100% del dinero (condiciones en contrato).
                </p>
              </div>

              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">¿Ofrecen soporte post-lanzamiento?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sí. Planes de mantenimiento mensual (MRR) con seguimiento de KPIs y mejoras continuas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">TRAID Agency</h3>
                <p className="text-gray-400 text-sm">
                  Automatizaciones e IA para ecommerce. Automatización de ventas total, n8n, integraciones con WhatsApp, MercadoLibre y Shopify.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Navegación</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#servicios" className="hover:text-purple-300 transition-colors">Servicios</a></li>
                  <li><a href="#metodologia" className="hover:text-purple-300 transition-colors">Metodología</a></li>
                  <li><a href="#casos" className="hover:text-purple-300 transition-colors">Casos</a></li>
                  <li><a href="#equipo" className="hover:text-purple-300 transition-colors">Equipo</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Plataformas</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Shopify</li>
                  <li>MercadoLibre</li>
                  <li>TiendaNube</li>
                  <li>WooCommerce</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Contacto</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://wa.me/5492995904484" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a></li>
                  <li><a href="mailto:contacto@traidagency.com" className="hover:text-purple-300 transition-colors">Email</a></li>
                  <li>LATAM • Remote-first</li>
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