import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { BACKGROUND_COLOR, CAMERA, PLANETS, STARS } from "../../config/scene";
import CameraRig from "./CameraRig";
import Planet from "./Planet";
import ResponsiveCamera from "./ResponsiveCamera";

const CANVAS_CAMERA = { position: CAMERA.position, fov: CAMERA.fov };

export default function Scene({ progressRef }) {
  return (
    <Canvas camera={CANVAS_CAMERA} dpr={[1, 2]}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <ambientLight intensity={0.12} />
      <directionalLight position={[-6, 6, 6]} intensity={2.2} color="#FFE6C4" />
      <Stars {...STARS} fade />
      {PLANETS.map(({ id, ...planet }) => (
        <Planet key={id} progressRef={progressRef} {...planet} />
      ))}
      <ResponsiveCamera />
      <CameraRig progressRef={progressRef} />
    </Canvas>
  );
}