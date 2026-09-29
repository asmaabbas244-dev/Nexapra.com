import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  SphereGeometry,
  CylinderGeometry,
  WireframeGeometry,
  LineSegments,
  LineBasicMaterial,
  Points,
  PointsMaterial,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ---- Sizes ---- */
    let width = container.clientWidth;
    let height = container.clientHeight;

    /* ---- Scene / Camera / Renderer ---- */
    const scene = new Scene();
    const camera = new PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    /* Cap pixel ratio for performance — 1.5 on mobile, 2 on desktop */
    const isMobile = window.innerWidth <= 768;
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
    );
    container.appendChild(renderer.domElement);

    /* ============================================================
       Wireframe Android bot — built from primitives, same material
       as the rest of the scene so it reads as one cohesive object.
       ============================================================ */
    const wireMat = new LineBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.4,
    });

    const robot = new Group();
    const disposables = []; // geometries to dispose on cleanup

    const addPart = (geometry, x = 0, y = 0, z = 0, rz = 0) => {
      const wireGeo = new WireframeGeometry(geometry);
      const seg = new LineSegments(wireGeo, wireMat);
      seg.position.set(x, y, z);
      seg.rotation.z = rz;
      robot.add(seg);
      disposables.push(geometry, wireGeo);
      return seg;
    };

    const s = 1.7; // overall scale, tuned to match old icosahedron footprint

    // Body (rounded capsule-ish cylinder)
    const bodyHeight = 1.15 * s;
    const bodyTopR = 0.42 * s;
    const bodyBotR = 0.52 * s;
    addPart(new CylinderGeometry(bodyTopR, bodyBotR, bodyHeight, 12), 0, 0, 0);

    // Head (dome)
    const headR = 0.5 * s;
    const headY = bodyHeight / 2 + headR * 0.75;
    addPart(
      new SphereGeometry(headR, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.58),
      0,
      headY,
      0,
    );

    // Antennae
    const antennaLen = 0.4 * s;
    const antennaR = 0.035 * s;
    const antennaY = headY + headR * 0.85;
    addPart(
      new CylinderGeometry(antennaR, antennaR, antennaLen, 6),
      -headR * 0.42,
      antennaY + antennaLen * 0.4,
      0,
      0.5,
    );
    addPart(
      new CylinderGeometry(antennaR, antennaR, antennaLen, 6),
      headR * 0.42,
      antennaY + antennaLen * 0.4,
      0,
      -0.5,
    );

    // Arms (straight stubs, classic Android silhouette)
    const armR = 0.14 * s;
    const armLen = 0.95 * s;
    const armX = bodyTopR + armR + 0.05 * s;
    addPart(new CylinderGeometry(armR, armR, armLen, 8), -armX, 0.1 * s, 0);
    addPart(new CylinderGeometry(armR, armR, armLen, 8), armX, 0.1 * s, 0);

    // Legs
    const legR = 0.16 * s;
    const legLen = 0.55 * s;
    const legX = bodyBotR * 0.45;
    const legY = -bodyHeight / 2 - legLen / 2;
    addPart(new CylinderGeometry(legR, legR, legLen, 8), -legX, legY, 0);
    addPart(new CylinderGeometry(legR, legR, legLen, 8), legX, legY, 0);

    scene.add(robot);

    /* ---- Particles (reduced for performance) ---- */
    const particleCount = isMobile ? 200 : 350;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Random point inside a sphere of radius 4
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new Float32BufferAttribute(positions, 3),
    );
    const particleMat = new PointsMaterial({
      color: 0x4ade80,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new Points(particleGeo, particleMat);
    scene.add(particles);

    /* ---- Mouse tracking ---- */
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ---- Resize handler ---- */
    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    /* ---- Visibility-based render loop ---- */
    let frameId;
    let isVisible = true;

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(container);

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      /* Skip rendering when off-screen */
      if (!isVisible) return;

      // Ambient rotation
      robot.rotation.y += 0.003;
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;

      // Mouse tilt (smooth lerp)
      const targetX = mouse.y * 0.25;
      const targetY = mouse.x * 0.35;
      robot.rotation.x += (targetX - robot.rotation.x) * 0.02;
      robot.rotation.y += (targetY - robot.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    /* ---- Cleanup ---- */
    return () => {
      cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      disposables.forEach((geo) => geo.dispose());
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", minHeight: "300px" }}
      aria-hidden="true"
    />
  );
}
