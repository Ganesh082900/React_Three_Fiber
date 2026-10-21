// Scroll progress (0..1) at which each section is centred.
export const SECTION_PROGRESS = Object.freeze({
  hero: 0,
  about: 0.25,
  skills: 0.5,
  projects: 0.75,
  contact: 1,
});

export const NAV_SECTIONS = Object.freeze(["about", "skills", "projects", "contact"]);

// Distance (in progress units) over which a panel fades out around its centre.
export const PANEL_FADE_RANGE = 0.09;

// Progress over which the 3D moon labels fade out after leaving the hero.
export const LABEL_FADE_RANGE = 0.08;

// Panels above this opacity accept pointer events.
export const PANEL_ACTIVE_OPACITY = 0.5;