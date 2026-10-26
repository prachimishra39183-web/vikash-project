import { useState } from 'react';

export function ProductImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-pale-blue ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-pale-blue via-white to-pale-blue bg-[length:200%_100%]" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
        }`}
      />
    </div>
  );
}
