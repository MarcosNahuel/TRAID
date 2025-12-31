interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
}

export default function Logo({
  className = "",
  width = 160,
  height = 35,
  animated = true
}: LogoProps) {
  // Mantener proporciones originales (328.539 x 71.604)
  const aspectRatio = 328.539 / 71.604;
  const calculatedHeight = height || width / aspectRatio;
  const calculatedWidth = width || height * aspectRatio;

  return (
    <svg
      viewBox="0 0 328.539 71.604"
      width={calculatedWidth}
      height={calculatedHeight}
      className={`${className} ${animated ? 'logo-animated' : ''}`}
      aria-label="TRAID Logo"
      role="img"
    >
      <defs>
        {/* Gradiente para el texto principal */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>

        {/* Gradiente animado para el punto */}
        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA">
            <animate
              attributeName="stop-color"
              values="#9333EA;#EC4899;#9333EA"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#7C3AED">
            <animate
              attributeName="stop-color"
              values="#7C3AED;#DB2777;#7C3AED"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Efecto de brillo */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g>
        {/* TRAID text */}
        <g fill="url(#logoGradient)">
          {/* T */}
          <polygon points="0,13.974 18.972,13.974 18.972,71.604 36.414,71.604 36.414,13.974 55.386,13.974 55.386,0 0,0" />

          {/* R */}
          <path d="M115.717,35.292c2.686-3.739,4.029-7.989,4.029-12.75c0-4.215-0.987-8.041-2.958-11.475
            c-1.973-3.433-4.947-6.136-8.925-8.109C103.886,0.986,99.074,0,93.431,0H64.157v71.604h17.442v-27.03h4.182l14.892,27.03h19.686
            l-16.524-28.356C109.07,41.685,113.03,39.033,115.717,35.292z M99.602,29.886c-1.599,1.565-3.996,2.346-7.191,2.346H81.599V14.484
            h10.812c3.195,0,5.592,0.783,7.191,2.346c1.597,1.565,2.397,3.707,2.397,6.426C101.999,26.112,101.198,28.323,99.602,29.886z" />

          {/* A */}
          <path d="M151.876,0l-25.908,71.604h18.258l4.284-12.648h26.724l4.284,12.648h18.462L172.072,0H151.876z
            M153.1,45.492l8.772-26.214l8.874,26.214H153.1z" />

          {/* I */}
          <rect x="205.834" y="0" width="17.442" height="71.604" />

          {/* D */}
          <path d="M295.645,17.085c-3.095-5.406-7.464-9.604-13.106-12.597C276.893,1.497,270.298,0,262.75,0h-26.826v71.604
            h26.826c7.479,0,14.058-1.495,19.736-4.488c5.677-2.992,10.063-7.207,13.158-12.648c3.094-5.439,4.641-11.661,4.641-18.666
            C300.285,28.73,298.738,22.491,295.645,17.085z M277.029,51.102c-3.672,3.605-8.807,5.406-15.401,5.406h-8.263V14.892h8.263
            c6.595,0,11.729,1.836,15.401,5.508s5.509,8.807,5.509,15.402C282.538,42.398,280.701,47.499,277.029,51.102z" />
        </g>

        {/* Punto púrpura animado */}
        <circle
          cx="318.186"
          cy="60.934"
          r="10.354"
          fill="url(#dotGradient)"
          filter={animated ? "url(#glow)" : undefined}
          className={animated ? "animate-pulse-slow" : ""}
        />
      </g>
    </svg>
  );
}
