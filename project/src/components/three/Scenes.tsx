import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import type { Group } from 'three';

function StrappingRoll() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <group ref={ref}>
      {/* Roll core */}
      <mesh castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.5, 64]} />
        <meshStandardMaterial color="#EEF5FF" roughness={0.7} />
      </mesh>
      {/* Strapping wrapped layers */}
      <mesh castShadow>
        <torusGeometry args={[0.78, 0.12, 24, 80]} />
        <meshStandardMaterial color="#4169F5" metalness={0.3} roughness={0.35} />
      </mesh>
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.78, 0.12, 24, 80]} />
        <meshStandardMaterial color="#2E52D9" metalness={0.3} roughness={0.35} />
      </mesh>
    </group>
  );
}

function PackingClip() {
  return (
    <group rotation={[0.3, 0.4, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.45, 0.18, 0.05]} />
        <meshStandardMaterial color="#FF914D" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.22, 0, 0]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.05]} />
        <meshStandardMaterial color="#F0762E" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[-0.22, 0, 0]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.05]} />
        <meshStandardMaterial color="#F0762E" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Parcel({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <mesh position={position} scale={scale} castShadow>
      <boxGeometry args={[0.6, 0.45, 0.6]} />
      <meshStandardMaterial color={color} roughness={0.8} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow />
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.7}>
        <StrappingRoll />
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.9} position={[1.5, 0.8, -0.5]}>
        <PackingClip />
      </Float>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5} position={[-1.6, -0.6, 0.3]}>
        <Parcel position={[0, 0, 0]} color="#FAFAF7" />
      </Float>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6} position={[1.3, -0.9, 0.6]}>
        <Parcel position={[0, 0, 0]} color="#E8FAF4" scale={0.7} />
      </Float>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4} position={[-1.2, 1.1, 0.6]}>
        <Parcel position={[0, 0, 0]} color="#F2EDFF" scale={0.5} />
      </Float>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.25} scale={9} blur={2.6} far={4} />
      <Environment preset="studio" />
    </>
  );
}

function LoginCube() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={ref}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.55} metalness={0.05} />
        </mesh>
        {/* Strap bands */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[1.45, 0.12, 1.45]} />
          <meshStandardMaterial color="#4169F5" roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh position={[0, -0.72, 0]}>
          <boxGeometry args={[1.45, 0.12, 1.45]} />
          <meshStandardMaterial color="#13B8A6" roughness={0.4} metalness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function Loader() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-cobalt/20 border-t-cobalt" />
    </div>
  );
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export function HeroScene({ className = '' }: { className?: string }) {
  const [supported, setSupported] = useState(true);
  useEffect(() => setSupported(hasWebGL()), []);

  if (!supported) {
    return (
      <div className={`grid h-full place-items-center ${className}`}>
        <div className="text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-cobalt to-teal text-white shadow-lift">
            <span className="font-display text-3xl font-bold">VP</span>
          </div>
          <p className="mt-4 text-sm text-muted">Packaging supplies, ready to ship.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 42 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function LoginScene({ className = '' }: { className?: string }) {
  const [supported, setSupported] = useState(true);
  useEffect(() => setSupported(hasWebGL()), []);

  if (!supported) {
    return (
      <div className={`grid h-full place-items-center ${className}`}>
        <div className="grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-cobalt/90 to-teal/90 text-white shadow-lift">
          <span className="font-display text-4xl font-bold">VP</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 4, 3]} intensity={1.1} castShadow />
          <LoginCube />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.2} scale={6} blur={2.4} far={3} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
