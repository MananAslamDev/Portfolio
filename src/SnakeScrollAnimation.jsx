import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SnakeScrollAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Normal pathLength from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Duplicate the path to make it longer (3 rounds)
  const snakePath = `
    M 90,10 L 90,30 L 10,30 L 10,50 L 90,50 L 90,70 L 10,70
    L 10,90 L 90,90 L 90,110 L 10,110 L 10,130 L 90,130
    L 90,150 L 10,150
  `;

  return (
    <div 
      ref={containerRef} 
      className="h-[400vh] w-full relative overflow-hidden bg-gray-100" // More scroll area
    >
      <div className="max-w-4xl mx-auto h-full relative">
        <svg 
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 100 160"
          preserveAspectRatio="none"
        >
          {/* Fixed starting point */}
          <circle cx="90" cy="10" r="2" fill="#FFDE00" />

          {/* Snake path */}
          <motion.path
            id="snakePath"
            d={snakePath}
            stroke="#FFDE00"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Scroll down</h1>
          <p className="text-xl text-gray-600">to see the snake animation</p>
        </div>
      </div>
    </div>
  );
}
