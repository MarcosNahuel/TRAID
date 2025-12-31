import { useEffect } from 'react';

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

function VideoCalendlyEmbed(): JSX.Element {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="space-y-10">
      {/* 1. Video Demo Agente Shopify - Venta 100% automática */}
      <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 to-black/60 p-4 sm:p-6 shadow-xl shadow-emerald-900/30">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/30 border border-emerald-500/50 rounded-full text-emerald-300 text-sm font-semibold">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Agente Shopify - Venta 100% Automática
          </span>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl bg-black" style={{ paddingTop: '56.25%' }}>
          <video
            src="/demo2.mov"
            title="Demo Agente Shopify - Venta Automática"
            controls
            playsInline
            preload="metadata"
            className="absolute left-0 top-0 h-full w-full object-contain"
          />
        </div>
        <p className="text-center text-gray-400 text-xs sm:text-sm mt-3">
          Sin intervención humana • Venta completada automáticamente
        </p>
      </div>

      {/* 3. Calendly - Agenda tu sesión (OCULTO - URL inválida) */}
      {/* TODO: Reemplazar con URL válida de Calendly
      <div>
        <div className="text-center mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Agenda tu sesión estratégica
          </h3>
          <p className="text-gray-400 text-sm">
            Reserva una llamada para implementar esto en tu negocio
          </p>
        </div>
        <div
          className="calendly-inline-widget rounded-3xl border border-purple-500/30 bg-black/40 shadow-lg shadow-purple-900/40"
          data-url="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
      */}

      {/* 4. Video explicativo de Nacho (OCULTO - 404 Error) */}
      {/* TODO: Reemplazar con URL válida de Wistia
      <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-4 shadow-lg shadow-purple-900/40">
        <div className="text-center mb-4">
          <span className="text-purple-300 text-sm font-medium">
            Conoce más sobre nuestro proceso
          </span>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://nacholeo005.wistia.com/medias/b4v4r8otx7?embedType=web_component&seo=true&videoWidth=960"
            title="Video Nacho"
            allow="autoplay; fullscreen"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
      </div>
      */}
    </div>
  );
}

export default VideoCalendlyEmbed;
