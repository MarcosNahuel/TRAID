declare module 'vanta/dist/vanta.halo.min' {
  interface VantaHaloOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    baseColor?: number;
    backgroundColor?: number;
    amplitudeFactor?: number;
    xOffset?: number;
    size?: number;
  }

  function HALO(options: VantaHaloOptions): {
    destroy: () => void;
  };

  export default HALO;
}
