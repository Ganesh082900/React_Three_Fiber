import { DoubleSide } from "three";

export default function PlanetRing({ radius }) {
  return (
    <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
      <ringGeometry args={[radius * 1.4, radius * 2, 96]} />
      <meshBasicMaterial color="#F2A65A" transparent opacity={0.35} side={DoubleSide} />
    </mesh>
  );
}