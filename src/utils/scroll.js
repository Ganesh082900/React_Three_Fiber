import { PANEL_FADE_RANGE, SECTION_PROGRESS } from "../config/scroll";

export const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

export const smoothstep = (t) => t * t * (3 - 2 * t);

export const getMaxScroll = () =>
  document.documentElement.scrollHeight - window.innerHeight;

export const getScrollProgress = () => {
  const max = getMaxScroll();
  return max > 0 ? window.scrollY / max : 0;
};

export const scrollToSection = (section) => {
  window.scrollTo({
    top: SECTION_PROGRESS[section] * getMaxScroll(),
    behavior: "smooth",
  });
};

export const getSectionOpacity = (progress, section) =>
  Math.max(0, 1 - Math.abs(progress - SECTION_PROGRESS[section]) / PANEL_FADE_RANGE);

export const getNearestSection = (progress) =>
  Object.keys(SECTION_PROGRESS).reduce(
    (nearest, section) =>
      getSectionOpacity(progress, section) > getSectionOpacity(progress, nearest)
        ? section
        : nearest,
    "hero"
  );