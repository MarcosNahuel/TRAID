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
      <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-4 shadow-lg shadow-purple-900/40">
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

      <div>
        <div
          className="calendly-inline-widget rounded-3xl border border-purple-500/30 bg-black/40 shadow-lg shadow-purple-900/40"
          data-url="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <noscript>
          Reserva una sesion:{' '}
          <a
            href="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar en Calendly
          </a>
        </noscript>
      </div>
    </div>
  );
}

export default VideoCalendlyEmbed;
