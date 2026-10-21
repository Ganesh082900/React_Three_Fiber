import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LABEL_FADE_RANGE } from "../../config/scroll";
import PlanetRing from "./PlanetRing";

export default function Planet({
  position,
  radius,
  color,
  emissive,
  spin,
  label,
  ring = false,
  progressRef,
}) {
  const meshRef = useRef();
  const labelRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * spin;
    if (labelRef.current) {
      labelRef.current.style.opacity = Math.max(0, 1 - progressRef.current / LABEL_FADE_RANGE);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.85}
          metalness={0.05}
          emissive={emissive}
          emissiveIntensity={0.15}
        />
      </mesh>
      {ring && <PlanetRing radius={radius} />}
      {label && (
        <Html
          position={[0, -radius - 0.25, 0]}
          center
          zIndexRange={[5, 0]}
          style={{ pointerEvents: "none" }}
        >
          <span ref={labelRef} className="planet-label" style={{ color: label.color }}>
            {label.text}
          </span>
        </Html>
      )}
    </group>
  );
}