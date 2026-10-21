export const BACKGROUND_COLOR = "#14100D";

export const CAMERA = Object.freeze({
  position: [0, 0, 10],
  fov: 40,
  pointerOffsetX: 0.25,
  pointerOffsetY: 0.15,
  followSpeed: 4,
});

// Camera stops, one per section (hero, about, skills, projects, contact).
export const CAMERA_STOPS = Object.freeze([
  { look: [0, 0, 0], position: [0, 0, 10] },
  { look: [2.25, 1.15, 2.5], position: [1.2, 1.1, 5.5] },
  { look: [1.4, -1.72, 2.5], position: [0.6, -1.7, 5.3] },
  { look: [4.75, -0.25, 0], position: [2.2, -0.25, 8.5] },
  { look: [-3.4, -28.6, -10], position: [-3.4, -28.6, -3.5] },
]);

export const STARS = Object.freeze({
  radius: 80,
  depth: 60,
  count: 6000,
  factor: 4,
  saturation: 0,
  speed: 0.6,
});

export const PLANETS = Object.freeze([
  {
    id: "projects",
    position: [4.75, -0.26, 0],
    radius: 2.63,
    color: "#C47F4E",
    emissive: "#3A1F14",
    spin: 0.04,
  },
  {
    id: "about",
    position: [2.25, 1.15, 2.5],
    radius: 0.32,
    color: "#5E8FAE",
    emissive: "#17303F",
    spin: 0.2,
    label: { text: "ABOUT", color: "#BCD9E6" },
  },
  {
    id: "skills",
    position: [1.4, -1.72, 2.5],
    radius: 0.225,
    color: "#7A9A5E",
    emissive: "#25331B",
    spin: 0.25,
    label: { text: "SKILLS", color: "#CFE0BC" },
  },
  {
    id: "contact",
    position: [-6, -30, -10],
    radius: 1.6,
    color: "#D2A47A",
    emissive: "#5A3A28",
    spin: 0.08,
    ring: true,
  },
]);