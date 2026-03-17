'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ColorBendsProps = {
  className?: string;
  style?: React.CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
};

const MAX_COLORS = 8 as const;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;

varying vec2 vUv;

// Simple pseudo-random function
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    float t = uTime * uSpeed;
    vec2 q = vUv;
    
    // Domain warping for organic flow
    q += uPointer * uParallax * 0.15;
    
    // Mouse interaction - pushing the fluid
    float dMouse = distance(q, (uPointer + 1.0) * 0.5);
    q += (uPointer - q) * exp(-dMouse * 8.0) * uMouseInfluence * 0.1;

    vec2 p = (q * 2.0 - 1.0) * uScale;
    p.x *= uCanvas.x / uCanvas.y;
    
    // Space rotation
    float cosR = uRot.x;
    float sinR = uRot.y;
    p = vec2(p.x * cosR - p.y * sinR, p.x * sinR + p.y * cosR);

    vec2 s = p;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    
    for (int i = 0; i < MAX_COLORS; ++i) {
        if (i >= uColorCount) break;
        
        // Balanced layer shifting
        s -= 0.02 * vec2(cos(t * 0.1), sin(t * 0.1));
        
        // Original-style domain warping for the "Bend" effect
        vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency + t * 0.1));
        float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
        
        float kBelow = clamp(uWarpStrength, 0.0, 1.0);
        float kMix = pow(kBelow, 0.3); 
        float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
        
        vec2 disp = (r - s) * kBelow;
        vec2 warped = s + disp * gain;
        float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
        
        float f = mix(m0, m1, kMix);
        
        // Smoother, more organic fluid transition
        float w = 1.0 - exp(-3.0 / exp(4.0 * f));
        
        // Soften the edges by capping the intensity
        w = smoothstep(0.0, 1.0, w);
        cover = max(cover, w);
    }
    
    vec3 col = clamp(sumCol, 0.0, 1.0);
    float a = uTransparent > 0 ? cover : 1.0;
    
    // Subtle Dithering Noise
    if (uNoise > 0.0001) {
        float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
        col += (n - 0.5) * uNoise;
        col = clamp(col, 0.0, 1.0);
    }
    
    vec3 finalRgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(finalRgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

export default function ColorBends({
  className,
  style,
  rotation = 45,
  speed = 0.05,
  colors = ['#2E62FF', '#4F46E5', '#3B82F6'],
  transparent = true,
  autoRotate = 2,
  scale = 1.2,
  frequency = 0.8,
  warpStrength = 1.2,
  mouseInfluence = 0.5,
  parallax = 0.2,
  noise = 0.1
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef<number | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef<number>(rotation);
  const autoRotateRef = useRef<number>(autoRotate);
  const pointerTargetRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const pointerSmoothRef = useRef<number>(4);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));
    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(0, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: transparent ? 1 : 0 },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise }
      },
      premultipliedAlpha: true,
      transparent: true
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };

    handleResize();

    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      const ro = new (window as any).ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else if (typeof window !== 'undefined') {
      (window as any).addEventListener('resize', handleResize);
    }

    const loop = () => {
      const dt = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;

      const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      material.uniforms.uRot.value.set(c, s);

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      const amt = Math.min(1, dt * pointerSmoothRef.current);
      cur.lerp(tgt, amt);
      material.uniforms.uPointer.value.copy(cur);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      material.dispose();
      geometry.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!materialRef.current) return;
    const material = materialRef.current;
    
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
    material.uniforms.uColorCount.value = Math.min(colors.length, MAX_COLORS);
    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    
    colors.forEach((col, i) => {
      if (i < MAX_COLORS) {
        const c = new THREE.Color(col);
        material.uniforms.uColors.value[i].set(c.r, c.g, c.b);
      }
    });

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
  }, [
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    colors,
    transparent,
    rotation,
    autoRotate
  ]);

  useEffect(() => {
    const material = materialRef.current;
    const container = containerRef.current;
    if (!material || !(container instanceof HTMLDivElement)) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };

    container.addEventListener('pointermove', handlePointerMove);
    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`} style={style} />;
}