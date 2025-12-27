'use client';

import { usePrivy } from '@privy-io/react-auth';
import RideList from './RideList';

interface MapSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  pickupCoords?: { lat: number; lng: number };
  dropoffCoords?: { lat: number; lng: number };
  onTopMatchUpdate?: (topMatch: any) => void;
  refreshTrigger?: number;
}

export default function MapSidebar({ isOpen, onToggle, pickupCoords, dropoffCoords, onTopMatchUpdate, refreshTrigger }: MapSidebarProps) {
  const { authenticated } = usePrivy();

  if (!authenticated) return null;

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button
        onClick={onToggle}
        className={`absolute top-4 left-4 z-50 p-2.5 bg-white text-black rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out active:scale-95 pointer-events-auto border border-gray-100 ${
          isOpen 
            ? 'md:translate-x-[320px] translate-x-0 opacity-0 md:opacity-100' // Hide on mobile when open (sheet covers it)
            : 'translate-x-0 opacity-100'
        }`}
        aria-label="Toggle Sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
          onClick={onToggle}
        />
      )}

      {/* Responsive Panel: Bottom Sheet (Mobile) / Sidebar (Desktop) */}
      <div 
        className={`
          fixed z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out
          
          /* Mobile: Bottom Sheet */
          bottom-0 left-0 right-0 h-[85vh] w-full rounded-t-3xl
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}

          /* Desktop: Left Sidebar */
          md:top-0 md:left-0 md:bottom-0 md:h-full md:w-[320px] md:rounded-none md:transform-none
          ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
        `}
      >
        {/* Mobile Pull Handle */}
        <div className="md:hidden w-full flex justify-center pt-3 pb-1" onClick={onToggle}>
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header Branding */}
        <div className="px-6 py-4 md:py-6 border-b border-gray-100 bg-white shrink-0 flex justify-between items-center">
            <h2 className="text-3xl font-black text-black tracking-tighter">Pincher</h2>
            {/* Mobile Close Button */}
            <button onClick={onToggle} className="md:hidden p-2 text-gray-400 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        {/* Ride List Content */}
        <div className="flex-1 overflow-y-auto bg-white overscroll-contain">
          <div className="p-0 pb-safe"> {/* padding-bottom-safe for iPhone Home bar */}
            <RideList pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} onTopMatchUpdate={onTopMatchUpdate} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 pb-8 md:pb-4">
          <p className="text-center text-[10px] text-gray-400 font-medium">
             Pincher Protocol © 2025
          </p>
        </div>
      </div>
    </>
  );
}
