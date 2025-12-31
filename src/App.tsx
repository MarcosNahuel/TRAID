import { ComponentType, ReactNode, useState, useRef } from "react";
import {
  ShoppingCart,
  Store,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Award,
  MessageCircle,
  Workflow,
  Code2,
  Rocket,
  CheckCircle2,
  X,
  Truck,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import VideoCalendlyEmbed from "./components/VideoCalendlyEmbed";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedCounter from "./components/AnimatedCounter";
import Logo from "./components/Logo";
import {
  ROHANADashboard,
  CaseGambimedicDashboard,
  CaseMeliAnalyticsDashboard,
  CaseMundialShopDashboard,
  CaseHuancomDashboard,
  CaseMikaelaDashboard,
  CaseConjuntoEconomicoDashboard,
} from "./components/casos-de-exito";

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
  hideModalHeader?: boolean;
};

// Stats data for the hero section
const heroStats = [
  { value: 45, suffix: " días", label: "Time to market" },
  { value: 100, suffix: "%", label: "Garantía de entrega" },
  { value: 7, suffix: "+", label: "Casos de éxito" },
];

function App() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
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

  const caseStudies: CaseStudy[] = [
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
      icon: (
        <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-amber-300" />
      ),
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
    {
      id: "gambimedic",
      title: "Gambimedic — Dashboard Ejecutivo",
      summary:
        "Resumen ejecutivo del desempeño del asistente automático en MercadoLibre. Métricas de velocidad, eficiencia y retorno de inversión.",
      icon: <Award className="h-10 w-10 sm:h-12 sm:w-12 text-blue-300" />,
      cardBackground:
        "bg-gradient-to-br from-blue-900/40 to-cyan-900/20 hover:from-blue-800/50 hover:to-cyan-800/30 border border-blue-500/20",
      highlight: {
        value: "58x",
        label: "Velocidad vs. humano",
        colorClass: "text-blue-300",
      },
      tags: ["Salud", "MercadoLibre", "Bot IA"],
      component: CaseGambimedicDashboard,
      modalDescription:
        "Dashboard ejecutivo con métricas clave del bot IA: tiempo de respuesta, velocidad relativa, automatización y análisis de ingresos.",
    },
    {
      id: "mundial-shop",
      title: "Mundial Shop — WhatsApp IA",
      summary:
        "Agente de WhatsApp IA que automatiza ventas mayoristas en Colombia. +35% de crecimiento sobre tendencia y atención 24/7.",
      icon: (
        <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-300" />
      ),
      cardBackground:
        "bg-gradient-to-br from-emerald-900/40 to-teal-900/20 hover:from-emerald-800/50 hover:to-teal-800/30 border border-emerald-500/20",
      highlight: {
        value: "+35%",
        label: "Crecimiento vs tendencia",
        colorClass: "text-emerald-300",
      },
      tags: ["E-commerce", "WhatsApp IA", "Mayorista"],
      component: CaseMundialShopDashboard,
      modalDescription:
        "Dashboard con análisis de impacto semanal, comparativa de pendientes antes/después, heatmap de actividad 24/7 y métricas de ROI.",
    },
    {
      id: "huancom",
      title: "Huancom Group — Energía Solar",
      summary:
        "Transformación digital en e-commerce. MercadoLíder Silver con +1,000 ventas y 97% de opiniones positivas. Workflows n8n que revirtieron tendencia negativa.",
      icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-300" />,
      cardBackground:
        "bg-gradient-to-br from-yellow-900/40 to-orange-900/20 hover:from-yellow-800/50 hover:to-orange-800/30 border border-yellow-500/20",
      highlight: {
        value: "+47.9%",
        label: "Reversión de tendencia",
        colorClass: "text-yellow-300",
      },
      tags: ["Energía Solar", "MercadoLibre", "n8n Workflows"],
      component: CaseHuancomDashboard,
      modalDescription:
        "Dashboard con métricas de MercadoLibre, análisis de impacto de implementación n8n, serie temporal de ventas y KPIs de calidad del vendedor.",
    },
    {
      id: "natural-vya",
      title: "NATURAL VyA",
      summary:
        "Dashboard interactivo que muestra la eficiencia y optimización de la cadena de suministro de NATURAL VyA.",
      icon: <Truck className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400" />,
      cardBackground:
        "bg-gradient-to-br from-cyan-900/40 to-blue-900/20 hover:from-cyan-800/50 hover:to-blue-800/30 border border-cyan-500/20",
      highlight: {
        value: "+20%",
        label: "Reducción de costos",
        colorClass: "text-cyan-400",
      },
      tags: ["Logística", "Inteligencia Artificial", "Cadena de Suministro"],
      component: CaseConjuntoEconomicoDashboard,
      modalDescription:
        "Dashboard interactivo que muestra la eficiencia y optimización de la cadena de suministro de NATURAL VyA.",
      hideModalHeader: true,
    },
    {
      id: "mikaela",
      title: "Mikaela Boutique — Bot WhatsApp IA",
      summary:
        "Boutique de moda femenina que incrementó ventas 46% con bot WhatsApp IA. $8.4M ARS en revenue y +$884K adicionales generados por automatización.",
      icon: <Store className="h-10 w-10 sm:h-12 sm:w-12 text-pink-400" />,
      cardBackground:
        "bg-gradient-to-br from-pink-900/40 to-purple-900/20 hover:from-pink-800/50 hover:to-purple-800/30 border border-pink-500/20",
      highlight: {
        value: "+46%",
        label: "Crecimiento en ventas",
        colorClass: "text-pink-400",
      },
      tags: ["Moda", "WooCommerce", "WhatsApp Bot IA"],
      component: CaseMikaelaDashboard,
      modalDescription:
        "Dashboard WooCommerce con análisis de impacto del bot WhatsApp IA, comparativa antes/después y métricas de automatización.",
    },
  ];

  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />

        {/* Hero Section - Completely Redesigned */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Gradient orbs for background effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="hero-title inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">
                Automatización con IA para Ecommerce
              </span>
            </div>

            {/* Main heading with animated gradient */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Automatiza y escala</span>
              <br />
              <span className="text-white">tu ecommerce</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Eliminamos los cuellos de botella con IA para que{" "}
              <span className="text-purple-400 font-semibold">
                el crecimiento dependa de vos
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#agenda"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 btn-shimmer"
              >
                <span>Solicitar propuesta</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#casos"
                className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border-2 border-purple-500/30 hover:border-purple-400/50 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 text-purple-400" />
                <span>Ver casos de éxito</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text stat-number">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Casos de exito - Enhanced */}
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
                      onClick={() => setActiveCase(study)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveCase(study);
                        }
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
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
                            setActiveCase(study);
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

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Panel Entregable - Previsualización CRM */}
        <section
          id="panel-entregable"
          className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Headphones className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
                Panel Entregable
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-2">
                Demo interactivo del CRM Postventa con Agentes IA
              </p>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Panel de control con métricas en tiempo real, pruebas de agentes
                IA y sistema de contestaciones automáticas.
              </p>
            </AnimatedSection>

            {/* Tags de funcionalidades */}
            <AnimatedSection animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "Control de Preventa", color: "indigo" },
                { label: "Control de Postventa", color: "violet" },
                { label: "Dashboard Analytics", color: "purple" },
                { label: "3 Agentes IA", color: "pink" },
                { label: "Soporte Automatizado", color: "cyan" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-2 text-sm font-medium text-${tag.color}-300 bg-${tag.color}-900/40 border border-${tag.color}-500/30 rounded-full backdrop-blur-sm`}
                >
                  {tag.label}
                </span>
              ))}
            </AnimatedSection>

            {/* Iframe Preview */}
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 glass-card">
                <div className="bg-gradient-to-r from-indigo-900/90 to-violet-900/90 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-gray-300 ml-2">
                      crm-postventa-demo.vercel.app
                    </span>
                  </div>
                  <a
                    href="https://crm-postventa-demo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
                  >
                    Abrir en nueva pestaña
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-white">
                  <iframe
                    src="https://crm-postventa-demo.vercel.app/"
                    className="w-full h-full border-none"
                    title="CRM Postventa Demo - MarIA S.A."
                    allow="clipboard-write"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
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
              {activeCase.hideModalHeader ? (
                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="absolute top-4 right-4 z-[10002] p-2 bg-red-600/80 hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-110"
                  aria-label="Cerrar dashboard"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              ) : (
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
              )}

              <div
                className={`w-full h-full overflow-y-auto bg-[#0a0e1a] ${
                  activeCase.hideModalHeader
                    ? ""
                    : "h-[calc(90vh-80px)] sm:h-[calc(95vh-100px)] p-2 sm:p-8"
                }`}
              >
                {(() => {
                  const DashboardComponent = activeCase.component;
                  return <DashboardComponent />;
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Demo y Agenda */}
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

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Que Hacemos */}
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

        {/* Pilares */}
        <section
          id="pilares"
          className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                Nuestros Pilares
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Canales de venta y notificaciones",
                  description:
                    "Automatizamos la comunicación comercial: secuencias de WhatsApp, sistema de mensajería Mercado Libre, recuperación de carritos, lead scoring y sincronización con CRMs y marketplaces. Resultado: más conversión y menos trabajo manual.",
                },
                {
                  icon: Workflow,
                  title: "Automatizaciones internas",
                  description:
                    "Flujos que reducen errores y tiempo operativo: sincronización de stock, remitos, picking, conciliaciones y tareas repetitivas mediante n8n, APIs y RPA ligero.",
                },
                {
                  icon: Users,
                  title: "Consultoría y capacitación",
                  description:
                    "Transferencia de conocimiento: capacitaciones, playbooks, SOPs y prompt-tuning para que tu equipo sea autónomo y mantenga los sistemas sin depender de terceros.",
                },
              ].map((pilar, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="h-full p-6 sm:p-8 glass-card rounded-2xl transition-all duration-500 group hover:scale-[1.02]">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                      <pilar.icon className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-200 transition-colors">
                      {pilar.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {pilar.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section
          id="oferta"
          className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-transparent"
        >
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                Propuesta de Valor
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                Nuestra Oferta
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
                Implementamos los flujos críticos de ventas y backoffice con n8n
                y agentes de IA. En 7 días tenés un piloto controlado; en ≤45
                días salimos a producción con tablero de KPIs. Trabajamos con
                alcance cerrado, métricas claras y sin sorpresas.
              </p>
              <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
                <span className="text-lg sm:text-xl font-semibold gradient-text">
                  Garantizamos entrega en 45 días
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Lo que incluye (45 días) */}
        <section
          id="servicios"
          className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                Qué incluimos
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                MVP de automatizaciones entregado y operativo
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Auditoría y mapa",
                  desc: "Auditoría y mapa de cuellos de botella",
                },
                {
                  title: "MVP de automatizaciones",
                  desc: "Diseño y entrega del MVP (WhatsApp, carritos, CRM)",
                },
                {
                  title: "Automatización de ventas total",
                  desc: "Captura, calificación, nurturing y handoff al vendedor",
                },
                {
                  title: "Dashboard con KPIs",
                  desc: "Dashboard con KPIs clave y capacitación al equipo",
                },
                {
                  title: "Documentación y SOPs",
                  desc: "Documentación, SOPs y plan de mantenimiento",
                },
              ].map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 50}
                  className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <div className="h-full p-4 sm:p-6 glass-card rounded-2xl transition-all duration-300 hover:border-green-500/30">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Metodología */}
        <section
          id="metodologia"
          className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                Proceso Probado
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                Metodología Ágil
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  step: 1,
                  title: "Discovery",
                  week: "Semana 1",
                  desc: "Auditoría inicial, relevamiento de procesos, métricas clave y configuración de accesos.",
                },
                {
                  step: 2,
                  title: "Pruebas",
                  week: "Semana 2",
                  desc: "Desarrollo e implementación del MVP. Testing controlado y ajustes iterativos.",
                },
                {
                  step: 3,
                  title: "Producción",
                  week: "Semanas 3-4",
                  desc: "Go-live, monitoreo activo, optimización continua y capacitación del equipo.",
                },
              ].map((phase, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="h-full p-4 sm:p-6 glass-card rounded-2xl text-center transition-all duration-300 hover:border-purple-500/40">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg sm:text-xl mb-4 shadow-lg shadow-purple-500/30">
                      {phase.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300 mb-3">
                      {phase.week}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {phase.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={300} className="mt-6 sm:mt-8">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 text-center backdrop-blur-sm">
                <h4 className="text-base sm:text-lg font-semibold mb-2 gradient-text">
                  Mantenimiento
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Reporte mensual, mejoras, soporte y capacitación (MRR
                  opcional)
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Equipo */}
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
              {[
                {
                  icon: Rocket,
                  name: "Nacho Leo",
                  role: "Founder & CEO",
                  desc: "Experto en automatizaciones con IA, docente en UDIA. Responsable de arquitectura, QA, plantillas n8n y estrategia comercial.",
                },
                {
                  icon: Code2,
                  name: "Nahuel Albornoz",
                  role: "Co-founder & Product Manager",
                  desc: "Científico de datos y desarrollador, especialista en aplicaciones de IA generativa y gestión de producto.",
                },
              ].map((member, index) => (
                <AnimatedSection
                  key={index}
                  animation={index === 0 ? "fade-right" : "fade-left"}
                  delay={index * 100}
                >
                  <div className="h-full p-6 sm:p-8 glass-card rounded-2xl transition-all duration-500 hover:border-purple-400/40 hover:scale-[1.02]">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <member.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-purple-300 font-medium text-sm sm:text-base">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                      {member.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* FAQ */}
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
              {[
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
              ].map((faq, index) => (
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

        {/* Footer */}
        <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-transparent border-t border-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
              <div>
                <Logo width={120} height={26} className="mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automatizaciones e IA para ecommerce. Automatización de ventas
                  total, n8n, integraciones con WhatsApp, MercadoLibre y
                  Shopify.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Navegación
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {["Servicios", "Metodología", "Casos", "Equipo"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="hover:text-purple-300 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Plataformas
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {["Shopify", "MercadoLibre", "TiendaNube", "WooCommerce"].map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Contacto
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="https://wa.me/5491136579967"
                      className="hover:text-purple-300 transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contacto@traid.agency"
                      className="hover:text-purple-300 transition-colors"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/traid-agency"
                      className="hover:text-purple-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-purple-500/10 text-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} TRAID Agency. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WhatsAppButton phoneNumber="5491136579967" />
    </VantaBackground>
  );
}

export default App;
