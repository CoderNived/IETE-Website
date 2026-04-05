import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * HeroCanvas — Three.js animated background.
 * Renders:
 *  1. A particle field (floating dots)
 *  2. A rotating wireframe icosahedron (tech feel)
 *  3. Ambient + point lighting
 */
export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Scene setup ── */
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias:  true,
      alpha:      true,   /* transparent background */
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Particle field ── */
    const PARTICLE_COUNT = 1200;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color:       0x1A56DB,
      size:        0.035,
      transparent: true,
      opacity:     0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Wireframe icosahedron (main 3D shape) ── */
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color:       0x1A56DB,
      wireframe:   true,
      transparent: true,
      opacity:     0.25,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(2.5, 0, 0);
    scene.add(icosahedron);

    /* ── Inner solid icosahedron (glowing core) ── */
    const innerGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color:       0x3B82F6,
      transparent: true,
      opacity:     0.08,
    });
    const innerIco = new THREE.Mesh(innerGeo, innerMat);
    innerIco.position.set(2.5, 0, 0);
    scene.add(innerIco);

    /* ── Lighting ── */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x1A56DB, 2, 10);
    pointLight1.position.set(2, 3, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3B82F6, 1, 8);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    /* ── Mouse parallax ── */
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    /* ── Resize handler ── */
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    /* ── Animation loop ── */
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      /* Rotate icosahedron */
      icosahedron.rotation.x = elapsed * 0.18;
      icosahedron.rotation.y = elapsed * 0.25;
      innerIco.rotation.x    = -elapsed * 0.15;
      innerIco.rotation.y    = -elapsed * 0.20;

      /* Slowly rotate particle field */
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = elapsed * 0.015;

      /* Mouse parallax on camera */
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup on unmount ── */
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset:    0,
        width:    "100%",
        height:   "100%",
      }}
    />
  );
}