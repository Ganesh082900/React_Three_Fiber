import { useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { CAMERA, CAMERA_STOPS } from "../../config/scene";
import { clamp01, smoothstep } from "../../utils/scroll";

// Flies the camera between stops as the page scrolls, with a slight pointer parallax.
export default function CameraRig({ progressRef }) {
  const { camera, pointer } = useThree();
  const scratch = useMemo(
    () => ({
      target: new Vector3(),
      lookAt: new Vector3(),
      from: new Vector3(),
      to: new Vector3(),
    }),
    []
  );

  useFrame((_, delta) => {
    const { target, lookAt, from, to } = scratch;
    const lastIndex = CAMERA_STOPS.length - 1;
    const position = clamp01(progressRef.current) * lastIndex;
    const index = Math.min(Math.floor(position), lastIndex - 1);
    const t = smoothstep(position - index);
    const start = CAMERA_STOPS[index];
    const end = CAMERA_STOPS[index + 1];

    target.copy(from.set(...start.position)).lerp(to.set(...end.position), t);
    lookAt.copy(from.set(...start.look)).lerp(to.set(...end.look), t);
    target.x += pointer.x * CAMERA.pointerOffsetX;
    target.y += pointer.y * CAMERA.pointerOffsetY;

    camera.position.lerp(target, 1 - Math.exp(-delta * CAMERA.followSpeed));
    camera.lookAt(lookAt);
  });

  return null;
}