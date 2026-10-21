import Overlay from "./components/overlay/Overlay";
import Scene from "./components/scene/Scene";
import useScrollProgress from "./hooks/useScrollProgress";
import "./styles/global.css";
import "./styles/overlay.css";

export default function App() {
  const { progressRef, progress } = useScrollProgress();

  return (
    <>
      <div className="canvas-layer">
        <Scene progressRef={progressRef} />
      </div>
      <Overlay progress={progress} />
      <div className="scroll-space" />
    </>
  );
}