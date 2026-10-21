import { PANEL_ACTIVE_OPACITY } from "../../config/scroll";
import { getSectionOpacity } from "../../utils/scroll";

export default function Panel({ section, progress, className = "", children }) {
  const opacity = getSectionOpacity(progress, section);
  const active = opacity > PANEL_ACTIVE_OPACITY ? "active" : "";
  return (
    <div className={`panel ${className} ${active}`} style={{ opacity }}>
      {children}
    </div>
  );
}