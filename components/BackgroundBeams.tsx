'use client';

export function BackgroundBeams() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Full page gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-cyan-50" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="beam-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="beam-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        {/* Animated beams - more visible */}
        <g className="animate-beam-1">
          <path
            d="M-100 200 Q 400 100, 900 300 T 1800 400"
            stroke="url(#beam-gradient-1)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />
        </g>
        
        <g className="animate-beam-2">
          <path
            d="M 1400 100 Q 900 300, 400 200 T -400 300"
            stroke="url(#beam-gradient-2)"
            strokeWidth="4"
            fill="none"
            opacity="0.7"
          />
        </g>
        
        <g className="animate-beam-3">
          <path
            d="M-200 600 Q 600 400, 1400 700 T 2200 800"
            stroke="url(#beam-gradient-3)"
            strokeWidth="5"
            fill="none"
            opacity="0.6"
          />
        </g>
        
        {/* Additional crossing beams */}
        <g className="animate-beam-1" style={{ animationDelay: '5s' }}>
          <path
            d="M 800 -100 Q 600 400, 400 900"
            stroke="url(#beam-gradient-1)"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </g>
        
        <g className="animate-beam-2" style={{ animationDelay: '7s' }}>
          <path
            d="M 200 -100 Q 400 400, 600 900"
            stroke="url(#beam-gradient-2)"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </g>
      </svg>
      
      <style jsx>{`
        @keyframes beam-1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateX(150px) translateY(-80px);
            opacity: 0.4;
          }
        }
        
        @keyframes beam-2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateX(-150px) translateY(80px);
            opacity: 0.35;
          }
        }
        
        @keyframes beam-3 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-120px);
            opacity: 0.3;
          }
        }
        
        .animate-beam-1 {
          animation: beam-1 20s ease-in-out infinite;
        }
        
        .animate-beam-2 {
          animation: beam-2 25s ease-in-out infinite;
        }
        
        .animate-beam-3 {
          animation: beam-3 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
