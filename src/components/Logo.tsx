import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'light', size = 'sm' }: LogoProps) {
  // Scaling factors based on 'size' prop
  const dimensions = {
    sm: { width: 140, height: 110 },
    md: { width: 180, height: 140 },
    lg: { width: 240, height: 190 },
  }[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`} id="brand-logo-root">
      {/* Container holding the custom vector elements */}
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 320 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        id="theme-logo-svg"
      >
        {/* SVG filter for slight premium glow */}
        <defs>
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Camera Silhouette - Hand-drawn Outline style */}
        <path
          d="M 90 95 
             C 90 85, 95 80, 110 80 
             L 125 80
             C 130 75, 140 60, 160 60
             L 210 60
             C 225 60, 230 75, 235 80
             L 260 80
             C 275 80, 280 85, 280 95
             L 280 170
             C 280 180, 275 185, 260 185
             L 110 185
             C 95 185, 90 180, 90 170
             Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />

        {/* Top left camera dial */}
        <path
          d="M 115 80 L 115 74 C 115 71, 130 71, 130 74 L 130 80"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />

        {/* 2. Large Camera Lens Circle (Layered in back) */}
        <circle
          cx="195"
          cy="138"
          r="48"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.65"
        />

        {/* 3. Camera design features: those signature water-droplet / splash leaf accents on top right */}
        {/* Top Leaf Accent 1 */}
        <path
          d="M 276 96 C 286 96, 296 86, 296 74 C 284 74, 276 84, 276 96 Z"
          fill="white"
          opacity="0.95"
        />
        {/* Bottom Leaf Accent 2 */}
        <path
          d="M 276 114 C 288 114, 298 108, 298 94 C 286 94, 276 102, 276 114 Z"
          fill="white"
          opacity="0.95"
        />

        {/* 4. Text - "The Creative" with Golden styling */}
        {/* "The" in elegant white script text */}
        <text
          x="35"
          y="158"
          fill="white"
          className="font-script"
          style={{ fontSize: '48px', fontWeight: 'normal' }}
        >
          The
        </text>

        {/* "C" in "Creative" in signature large Golden typography inside / overlapping the lens */}
        <text
          x="115"
          y="166"
          fill="#D4AF37"
          className="font-script select-none"
          style={{ fontSize: '115px', fontWeight: 'bold' }}
          filter="url(#gold-glow)"
        >
          C
        </text>

        {/* "reative" in elegant white script text */}
        <text
          x="164"
          y="154"
          fill="white"
          className="font-script"
          style={{ fontSize: '48px', fontWeight: 'normal' }}
        >
          reative
        </text>

        {/* 5. Clean underline separator */}
        <line
          x1="65"
          y1="195"
          x2="285"
          y2="195"
          stroke="white"
          strokeWidth="2"
          opacity="0.9"
        />

        {/* 6. PICTURE Typography Box */}
        {/* Spaced out letters "P I C T U R E" */}
        {/* Golden Box representing the "P I" highlighting in block */}
        <rect
          x="110"
          y="204"
          width="48"
          height="16"
          fill="#D4AF37"
          rx="1"
        />

        {/* Text centered below the divider line */}
        {/* "P I" written on top of the golden rectangle in dark or customized color to stand out, and "C T U R E" in white */}
        <text
          x="114"
          y="216"
          fill="black"
          className="font-sans font-bold select-none tracking-[0.2em]"
          style={{ fontSize: '12px' }}
        >
          PI
        </text>
        <text
          x="166"
          y="216"
          fill="white"
          className="font-sans font-medium select-none tracking-[0.25em]"
          style={{ fontSize: '12px' }}
        >
          CTURE
        </text>
      </svg>
    </div>
  );
}
