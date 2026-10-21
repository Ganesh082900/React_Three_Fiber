import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { CAMERA } from "../../config/scene";
import { RESPONSIVE, isStackedLayout } from "../../config/responsive";

const getFov = (aspect) => {
  if (aspect >= RESPONSIVE.referenceAspect) return CAMERA.fov;
  const halfFov = MathUtils.degToRad(CAMERA.fov) / 2;
  const fov = 2 * Math.atan((Math.tan(halfFov) * RESPONSIVE.referenceAspect) / aspect);
  return Math.min(MathUtils.radToDeg(fov), RESPONSIVE.maxFov);
};

// Adapts the projection to the screen shape (phones, tablets, laptops, ultrawide).
export default function ResponsiveCamera() {
  const camera = useThree((state) => state.camera);

  useFrame(({ size }) => {
    const { width, height } = size;
    const fov = getFov(width / height);
    const stacked = isStackedLayout(width, height);
    const offsetY = stacked ? Math.round(height * RESPONSIVE.stackedShiftY) : 0;
    const view = camera.view;
    const viewMatches = stacked
      ? view?.enabled && view.offsetY === offsetY && view.fullWidth === width && view.fullHeight === height
      : !view?.enabled;

    if (Math.abs(camera.fov - fov) < 0.01 && viewMatches) return;

    camera.fov = fov;
    if (stacked) camera.setViewOffset(width, height, 0, offsetY, width, height);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  });

  return null;
}