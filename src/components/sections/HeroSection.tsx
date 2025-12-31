import { Sparkles, ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCounter from "../AnimatedCounter";
import { heroStats } from "../../data/caseStudies";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax: contenido se mueve más lento (0.3x)
  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient orbs for background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className="relative z-10 text-center max-w-5xl mx-auto"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: opacityFade,
        }}
      >
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
            href="https://wa.me/5491136579967?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20automatización%20con%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg btn-shimmer btn-premium btn-ripple"
          >
            <span>Solicitar propuesta</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#casos"
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border-2 border-purple-500/30 hover:border-purple-400/50 bg-purple-500/5 backdrop-blur-sm btn-premium btn-outline-fill"
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
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: opacityFade }}
      >
        <svg
          className="w-6 h-6 text-purple-400/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
