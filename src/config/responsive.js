// Keep in sync with the "stacked layout" media query in styles/overlay.css:
// (max-aspect-ratio: 1/1), (max-width: 600px)
export const STACKED_MAX_WIDTH = 600;

export const isStackedLayout = (width, height) =>
  width <= STACKED_MAX_WIDTH || width / height <= 1;

export const RESPONSIVE = Object.freeze({
  // Aspect ratio the camera path was composed for; narrower screens widen the vertical FOV
  // so the same horizontal span (and the planets) stays visible.
  referenceAspect: 1.1,
  maxFov: 90,
  // Fraction of the screen height the 3D scene moves up in the stacked layout,
  // leaving the lower part of the screen for the text panels.
  stackedShiftY: 0.3,
});