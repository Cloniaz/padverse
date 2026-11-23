import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import type { ControllerSpec } from '../../data/controllers';

interface ControllerModelProps {
  controller: ControllerSpec;
  rotationY: number;
}

export const ControllerModel: React.FC<ControllerModelProps> = ({ controller, rotationY }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Materials based on controller theme and verified textures
  const materials = useMemo(() => {
    const isWhite = controller.id.includes('white');
    const isGrey = controller.id.includes('grey') || controller.id.includes('2c') || controller.id.includes('famicom');

    let bodyColor = '#17171a'; // Default sleek matte dark
    if (isWhite) bodyColor = '#f0f3f8';
    if (isGrey) bodyColor = '#c4c8d0';
    if (controller.id.includes('midnight-black')) bodyColor = '#0b0c0e';

    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.5,
      metalness: 0.1,
    });

    const gripMat = new THREE.MeshStandardMaterial({
      color: isWhite ? '#d8dce2' : '#0d0d0f',
      roughness: 0.85,
      metalness: 0.05,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: controller.theme.accent,
      emissive: controller.theme.accent,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    const stickMat = new THREE.MeshStandardMaterial({
      color: '#1a1a1d',
      roughness: 0.8,
      metalness: 0.3,
    });

    const metalMat = new THREE.MeshStandardMaterial({
      color: '#d0d4db',
      roughness: 0.2,
      metalness: 0.9,
    });

    const ledGlowMat = new THREE.MeshBasicMaterial({
      color: controller.theme.accent,
    });

    return { bodyMat, gripMat, accentMat, stickMat, metalMat, ledGlowMat };
  }, [controller]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Smooth interpolation to target rotation angle
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        rotationY,
        10,
        delta
      );
    }
  });

  const isPlayStation = controller.layoutType === 'playstation';

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.25, 1.25, 1.25]}>
      {/* --- Central Main Body Shell --- */}
      <mesh material={materials.bodyMat} castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 1.3, 0.6]} />
      </mesh>

      {/* --- Left Ergonomic Grip Horn --- */}
      <mesh
        material={materials.gripMat}
        castShadow
        receiveShadow
        position={[-1.25, -0.5, 0.05]}
        rotation={[0.15, 0, 0.42]}
      >
        <cylinderGeometry args={[0.34, 0.22, 1.5, 32]} />
      </mesh>

      {/* --- Right Ergonomic Grip Horn --- */}
      <mesh
        material={materials.gripMat}
        castShadow
        receiveShadow
        position={[1.25, -0.5, 0.05]}
        rotation={[0.15, 0, -0.42]}
      >
        <cylinderGeometry args={[0.34, 0.22, 1.5, 32]} />
      </mesh>

      {/* --- Top Shoulder / Bumpers --- */}
      <mesh material={materials.metalMat} castShadow position={[-0.85, 0.72, -0.1]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.65, 0.18, 0.35]} />
      </mesh>
      <mesh material={materials.metalMat} castShadow position={[0.85, 0.72, -0.1]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.65, 0.18, 0.35]} />
      </mesh>

      {/* --- Triggers (L2/LT & R2/RT) --- */}
      <mesh material={materials.metalMat} castShadow position={[-0.85, 0.85, -0.25]} rotation={[-0.3, 0, 0.1]}>
        <boxGeometry args={[0.5, 0.25, 0.4]} />
      </mesh>
      <mesh material={materials.metalMat} castShadow position={[0.85, 0.85, -0.25]} rotation={[-0.3, 0, -0.1]}>
        <boxGeometry args={[0.5, 0.25, 0.4]} />
      </mesh>

      {/* --- Brand Emissive LED Bar / Touchpad Accent --- */}
      <mesh material={materials.ledGlowMat} position={[0, 0.35, 0.31]}>
        <boxGeometry args={[0.85, 0.06, 0.02]} />
      </mesh>

      {/* --- STICKS (Asymmetric for Xbox/GameSir/8BitDo vs Symmetric for PlayStation) --- */}
      {isPlayStation ? (
        <>
          {/* Dual Symmetrical Sticks (Bottom Center) */}
          <group position={[-0.45, -0.25, 0.32]}>
            <mesh material={materials.accentMat}>
              <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
            </mesh>
            <mesh material={materials.stickMat} position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.26, 0.2, 0.16, 32]} />
            </mesh>
          </group>

          <group position={[0.45, -0.25, 0.32]}>
            <mesh material={materials.accentMat}>
              <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
            </mesh>
            <mesh material={materials.stickMat} position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.26, 0.2, 0.16, 32]} />
            </mesh>
          </group>

          {/* D-Pad (Top Left) */}
          <group position={[-0.78, 0.2, 0.32]}>
            <mesh material={materials.metalMat}>
              <boxGeometry args={[0.45, 0.15, 0.08]} />
            </mesh>
            <mesh material={materials.metalMat}>
              <boxGeometry args={[0.15, 0.45, 0.08]} />
            </mesh>
          </group>
        </>
      ) : (
        <>
          {/* Asymmetric Stick Layout (Xbox, GameSir, Nintendo, 8BitDo) */}
          {/* Left Stick (Top Left) */}
          <group position={[-0.75, 0.22, 0.32]}>
            <mesh material={materials.accentMat}>
              <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
            </mesh>
            <mesh material={materials.stickMat} position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.26, 0.2, 0.16, 32]} />
            </mesh>
          </group>

          {/* Right Stick (Bottom Right) */}
          <group position={[0.45, -0.22, 0.32]}>
            <mesh material={materials.accentMat}>
              <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
            </mesh>
            <mesh material={materials.stickMat} position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.26, 0.2, 0.16, 32]} />
            </mesh>
          </group>

          {/* D-Pad (Bottom Left) */}
          <group position={[-0.45, -0.22, 0.32]}>
            <mesh material={materials.metalMat}>
              <boxGeometry args={[0.45, 0.14, 0.08]} />
            </mesh>
            <mesh material={materials.metalMat}>
              <boxGeometry args={[0.14, 0.45, 0.08]} />
            </mesh>
          </group>
        </>
      )}

      {/* --- Action Face Buttons (Diamond Cluster - Top Right) --- */}
      <group position={[0.78, 0.22, 0.32]}>
        {/* Top Button */}
        <mesh material={materials.metalMat} position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 16]} />
        </mesh>
        {/* Bottom Button */}
        <mesh material={materials.metalMat} position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 16]} />
        </mesh>
        {/* Left Button */}
        <mesh material={materials.metalMat} position={[-0.2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 16]} />
        </mesh>
        {/* Right Button */}
        <mesh material={materials.metalMat} position={[0.2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 16]} />
        </mesh>
      </group>

      {/* --- Center Logo / Guide Button --- */}
      <mesh material={materials.accentMat} position={[0, 0.08, 0.33]}>
        <cylinderGeometry args={[0.16, 0.16, 0.08, 32]} />
      </mesh>
    </group>
  );
};
