import {
  ShoppingCart,
  TrendingUp,
  Award,
  MessageCircle,
  Zap,
  Truck,
  Store,
} from "lucide-react";
import { CaseStudy, HeroStat } from "../types";
import {
  ROHANADashboard,
  CaseGambimedicDashboard,
  CaseMeliAnalyticsDashboard,
  CaseMundialShopDashboard,
  CaseHuancomDashboard,
  CaseMikaelaDashboard,
  CaseConjuntoEconomicoDashboard,
} from "../components/casos-de-exito";

export const heroStats: HeroStat[] = [
  { value: 20, suffix: "+", label: "Casos de éxito" },
  { value: 2, suffix: "+", label: "Años en el mercado" },
  { value: 100, suffix: "%", label: "Garantía de entrega" },
];

export const caseStudies: CaseStudy[] = [
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
