'use client';

export function CheckingRoadConditions() {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-3xl">🚦</span>
          </div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
        </div>
      </div>
      <h3 className="text-xl font-black text-black mb-2">Analyzing Routes</h3>
      <p className="text-gray-500 font-medium">Checking real-time traffic and road conditions...</p>
      
      <div className="mt-6 flex justify-center gap-1">
        <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
