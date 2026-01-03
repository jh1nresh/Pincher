'use client';

export function DynamicGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-linear-to-tl from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-gradient-shift-reverse"></div>
      
      {/* Vortex-like rotating gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-linear-to-r from-violet-500/30 via-fuchsia-500/30 to-cyan-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(5deg);
          }
        }
        
        @keyframes gradient-shift-reverse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotate(-5deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
