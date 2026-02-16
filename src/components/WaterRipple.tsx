'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Shader for the ripple overlay effect
const RippleShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uHover: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 p = vUv;
      
      // Calculate distance from mouse (normalized 0..1)
      float dist = distance(p, uMouse);

      // Ripple parameters
      float frequency = 12.0; 
      float speed = 2.5;
      float amplitude = 0.15; // Affects alpha variance

      // Create decaying sine wave from mouse
      float decay = exp(-dist * 2.0);
      float wave = sin(dist * frequency - uTime * speed);
      
      // Calculate horizontal gradient (Darker on left, lighter on right)
      // Text is on the left, so we need higher opacity there.
      // smoothstep(0.0, 1.0, vUv.x) gives 0 at left, 1 at right.
      // We want the opposite: 1 at left, 0 at right.
      float gradient = 1.0 - smoothstep(0.0, 0.55, vUv.x);
      
      // Base alpha determined by gradient (max 0.6 on far left - slightly lighter)
      float baseAlpha = gradient * 0.6;

      // Add ripple effect (keep it subtle)
      // Ripple adds/subtracts visibility
      float alpha = baseAlpha + (wave * amplitude * decay);

      // Ensure minimal visibility for text contrast even without ripples
      // and clamp max to avoid pitch black
      alpha = clamp(alpha, 0.05, 0.75);

      // Output black color with calculated alpha
      gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
    }
  `,
};

function FullScreenOverlay() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, pointer } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();

      // Convert pointer to UV space [0,1]
      const uvMouse = new THREE.Vector2(
        (pointer.x + 1) / 2,
        (pointer.y + 1) / 2,
      );

      // Smooth mouse movement
      materialRef.current.uniforms.uMouse.value.lerp(uvMouse, 0.1);
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    [],
  );

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={RippleShader.fragmentShader}
        vertexShader={RippleShader.vertexShader}
        uniforms={uniforms}
        transparent={true} // Crucial for overlay
      />
    </mesh>
  );
}

export const WaterRipple: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        className="w-full h-full"
        gl={{ alpha: true }} // Enable transparent canvas
      >
        <FullScreenOverlay />
      </Canvas>
    </div>
  );
};
