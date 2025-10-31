﻿import { ComponentType, ReactNode, useState } from "react";
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
  X,
} from "lucide-react";
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import ROHANADashboard from "./components/ROHANADashboard";
import VideoCalendlyEmbed from "./components/VideoCalendlyEmbed";
import CaseGambimedicDashboard from "./components/CaseGambimedicDashboard";
import CaseMeliAnalyticsDashboard from "./components/CaseMeliAnalyticsDashboard";

type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  cardBackground: string;
  highlight: {
    value: string;
    label: string;
    colorClass: string;
  };
  tags: string[];
  component: ComponentType;
  modalDescription: string;
};

function App() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const caseStudies: CaseStudy[] = [
    {
      id: "gambimedic-ia",
      title: "Gambimedic — Bot IA omnicanal",
      summary:
        "Implementación end-to-end para clínica médica que combina atención automática, entrega de estudios y seguimiento post consulta.",
      icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-purple-300" />,
      cardBackground:
        "bg-gradient-to-br from-purple-950/40 to-indigo-900/20 hover:from-purple-900/50 hover:to-indigo-900/30 border border-purple-500/20",
      highlight: {
        value: "56.5%",
        label: "Respuestas gestionadas por IA",
        colorClass: "text-purple-300",
      },
      tags: ["Salud", "Atención al paciente", "Omnicanalidad"],
      component: CaseGambimedicDashboard,
      modalDescription:
        "Dashboard que resume interacciones, performance del bot IA y workloads críticos (turnos, postventa, soporte técnico).",
    },
    {
      id: "rohana-recupero",
      title: "Rohana — Ventas & Conversaciones con IA",
      summary:
        "Secuencias conversacionales con IA y follow-up multicanal para evitar carritos abandonados y reactivar leads fríos.",
      icon: (
        <ShoppingCart className="h-10 w-10 sm:h-12 sm:w-12 text-green-400" />
      ),
      cardBackground:
        "bg-gradient-to-br from-purple-900/40 to-purple-900/20 hover:from-purple-800/50 hover:to-purple-800/30 border border-purple-500/20",
      highlight: {
        value: "+28%",
        label: "Recuperación en 30 días",
        colorClass: "text-green-400",
      },
      tags: ["Retail moda", "WhatsApp + Shopify", "Automatización post-venta"],
      component: ROHANADashboard,
      modalDescription:
        "Dashboard completo con mapeo de ventas antes y después del agente, correlaciones y mapa de calor de conversaciones.",
    },
    {
      id: "meli-analytics",
      title: "MELI Analytics — Antes/Después & Postventa IA",
      summary:
        "Sistema completo de IA para Mercado Libre que automatiza preventa y postventa. Incluye análisis de impacto (antes vs. después) y workflows de automatización.",
      icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-amber-300" />,
      cardBackground:
        "bg-gradient-to-br from-amber-900/40 to-purple-900/20 hover:from-amber-800/50 hover:to-purple-800/30 border border-amber-500/20",
      highlight: {
        value: "+61%",
        label: "Crecimiento en ventas",
        colorClass: "text-amber-300",
      },
      tags: ["Mercado Libre", "Automatización IA", "Workflows n8n"],
      component: CaseMeliAnalyticsDashboard,
      modalDescription:
        "Dashboard con 2 pestañas: (1) Análisis de Impacto antes/después del sistema IA, y (2) Métricas de workflows de preventa, postventa y mensajes automatizados.",
    },
  ];

  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />

        {/* Hero Section */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
              Automatiza y escala tu ecommerce: vende en piloto automático
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-300 font-semibold leading-relaxed px-2">
              Eliminamos todos los cuellos de botella de tu Ecommerce para que
              el crecimiento dependa de vos.
            </p>
            <div className="flex justify-center px-4">
              <a
                href="#agenda"
                className="inline-block px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
              >
                🚀 Contacta con nosotros
              </a>
            </div>
          </div>
        </section>

        {/* Demo y Agenda */}
        <section
          id="agenda"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/40"
        >
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mira la demo y agenda tu sesion
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-2">
              Conoce el flujo completo y reserva una llamada estrategica para
              implementar automatizaciones a medida.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <VideoCalendlyEmbed />
          </div>
        </section>

        {/* Que Hacemos */}
        <section
          id="que-hacemos"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/30"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              ¿Qué hacemos?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center px-2">
              Diseñamos e implementamos soluciones de automatización e
              inteligencia artificial especializadas en ecommerce: integración
              de canales (WhatsApp, Instagram, MercadoLibre, Shopify,
              TiendaNube, WooCommerce),{" "}
              <strong>automatización de ventas total</strong>, recuperación de
              carritos, orquestación de procesos con n8n y optimización de
              logística y fulfillment. También trabajamos procesos internos:
              conciliaciones, control de stock y sincronización multicanal.
            </p>
          </div>
        </section>

        {/* Pilares */}
        <section
          id="pilares"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestros Pilares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <MessageCircle className="h-12 w-12 sm:h-14 sm:w-14 mb-4 sm:mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Canales de venta y notificaciones
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Automatizamos la comunicación comercial: secuencias de
                  WhatsApp, sistema de mensajería Mercado Libre, recuperación de
                  carritos, lead scoring y sincronización con CRMs y
                  marketplaces. Resultado: más conversión y menos trabajo
                  manual.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Workflow className="h-12 w-12 sm:h-14 sm:w-14 mb-4 sm:mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Automatizaciones internas
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Flujos que reducen errores y tiempo operativo: sincronización
                  de stock, remitos, picking, conciliaciones y tareas
                  repetitivas mediante n8n, APIs y RPA ligero.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 group hover:scale-105">
                <Users className="h-12 w-12 sm:h-14 sm:w-14 mb-4 sm:mb-6 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Consultoría y capacitación
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Transferencia de conocimiento: capacitaciones, playbooks, SOPs
                  y prompt-tuning para que tu equipo sea autónomo y mantenga los
                  sistemas sin depender de terceros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section
          id="oferta"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestra Oferta
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed px-2">
              Implementamos los flujos críticos de ventas y backoffice con n8n y
              agentes de IA. En 7 días tenés un piloto controlado; en ≤45 días
              salimos a producción con tablero de KPIs. Trabajamos con alcance
              cerrado, métricas claras y sin sorpresas.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-purple-600/20 border border-purple-500/50 rounded-full mx-auto">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              <span className="text-base sm:text-lg font-semibold">
                Garantizamos entrega en 45 días
              </span>
            </div>
          </div>
        </section>

        {/* Lo que incluye (45 días) */}
        <section
          id="servicios"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Que incluimos
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg">
              MVP de automatizaciones entregado y operativo
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Auditoría y mapa
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Auditoría y mapa de cuellos de botella
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      MVP de automatizaciones
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Diseño y entrega del MVP (WhatsApp, carritos, CRM)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Automatización de ventas total
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Captura, calificación, nurturing y handoff al vendedor
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Dashboard con KPIs
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Dashboard con KPIs clave y capacitación al equipo
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Documentación y SOPs
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Documentación, SOPs y plan de mantenimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section
          id="metodologia"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/30"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Metodología Ágil
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">
                    1
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Discovery
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300">Semana 1</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  Auditoría inicial, relevamiento de procesos, métricas clave y
                  configuración de accesos.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">
                    2
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Pruebas</h3>
                  <p className="text-xs sm:text-sm text-purple-300">Semana 2</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  Desarrollo e implementación del MVP. Testing controlado y
                  ajustes iterativos.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">
                    3
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Producción
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300">
                    Semanas 3-4
                  </p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  Go-live, monitoreo activo, optimización continua y
                  capacitación del equipo.
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-2xl border border-purple-500/30 text-center">
              <h4 className="text-base sm:text-lg font-semibold mb-2">
                Mantenimiento
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Reporte mensual, mejoras, soporte y capacitación (MRR opcional)
              </p>
            </div>
          </div>
        </section>

        {/* Casos de exito */}
        <section
          id="casos"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Casos de exito
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12">
              Selecciona un caso para abrir su dashboard interactivo con
              resultados antes y despues del agente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  role="button"
                  tabIndex={0}
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/60 ${study.cardBackground}`}
                  onClick={() => setActiveCase(study)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveCase(study);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3">
                      {study.icon}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {study.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-300 uppercase tracking-wide">
                          Caso #{(index + 1).toString().padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs sm:text-sm text-gray-300 bg-black/30 border border-purple-500/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 sm:mt-6 bg-black/30 p-3 sm:p-4 rounded-lg">
                    <p
                      className={`text-2xl sm:text-3xl font-bold ${study.highlight.colorClass}`}
                    >
                      {study.highlight.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {study.highlight.label}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveCase(study);
                    }}
                  >
                    Ver dashboard
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal del dashboard */}
        {activeCase && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setActiveCase(null);
              }
            }}
          >
            <div className="relative w-full max-w-[95vw] h-[90vh] sm:max-w-[95vw] sm:h-[95vh] bg-gradient-to-br from-[#0a0e1a] to-[#141829] rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30">
              <div className="sticky top-0 z-[10001] bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 border-b border-purple-500/30 flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-white">
                    Dashboard - {activeCase.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-purple-300">
                    {activeCase.modalDescription}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="p-2 sm:p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-110"
                  aria-label="Cerrar dashboard"
                >
                  <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </button>
              </div>
              <div className="w-full h-[calc(90vh-80px)] sm:h-[calc(95vh-100px)] overflow-y-auto p-2 sm:p-8 bg-[#0a0e1a]">
                {(() => {
                  const DashboardComponent = activeCase.component;
                  return <DashboardComponent />;
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Equipo */}
        <section
          id="equipo"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/30"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestro Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <UserCheck className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    Nacho Leo
                  </h3>
                  <p className="text-purple-300 font-medium text-sm sm:text-base">
                    Líder técnico
                  </p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                  Experto en automatizaciones con IA, docente en UDIA.
                  Responsable de arquitectura, QA y plantillas n8n.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Code2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    Nahuel Albornoz
                  </h3>
                  <p className="text-purple-300 font-medium text-sm sm:text-base">
                    Data & GenAI Ops
                  </p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                  Científico de datos y desarrollador, especialista en
                  aplicaciones de IA generativa.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    Ignacio Ana
                  </h3>
                  <p className="text-purple-300 font-medium text-sm sm:text-base">
                    Growth & Ecommerce
                  </p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                  Especialista en ecommerce y marketing. Responsable de
                  estrategia comercial, generación de leads y contenidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-300">
                  ¿Qué plataformas trabajan?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Shopify, MercadoLibre, TiendaNube, WooCommerce y marketplaces
                  en general.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-300">
                  ¿Cuánto tarda la implementación?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Usualmente 30–45 días para el MVP de automatizaciones
                  críticas.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-300">
                  ¿Qué garantía ofrecen?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Si los sistemas no están instalados en 45 días, devolvemos el
                  100% del dinero (condiciones en contrato).
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-300">
                  ¿Ofrecen soporte post-lanzamiento?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Sí. Planes de mantenimiento mensual (MRR) con seguimiento de
                  KPIs y mejoras continuas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                  TRAID Agency
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Automatizaciones e IA para ecommerce. Automatización de ventas
                  total, n8n, integraciones con WhatsApp, MercadoLibre y
                  Shopify.
                </p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                  Navegación
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>
                    <a
                      href="#servicios"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#metodologia"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Metodología
                    </a>
                  </li>
                  <li>
                    <a
                      href="#casos"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Casos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#equipo"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Equipo
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                  Plataformas
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>Shopify</li>
                  <li>MercadoLibre</li>
                  <li>TiendaNube</li>
                  <li>WooCommerce</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                  Contacto
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li>
                    <a
                      href="https://wa.me/5492995904484"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contacto@traidagency.com"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Email
                    </a>
                  </li>
                  <li>LATAM • Remote-first</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-500/20 pt-4 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
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
