import { Capacitor } from '@capacitor/core';

/**
 * Platform Utilities for Pincher
 * Handles cross-platform quirks between Web, iOS, and Android.
 */

export const PLATFORM = {
  isNative: Capacitor.isNativePlatform(),
  isIOS: Capacitor.getPlatform() === 'ios',
  isAndroid: Capacitor.getPlatform() === 'android',
  isWeb: Capacitor.getPlatform() === 'web',
};

/**
 * Safely reloads the application based on the platform.
 * - Web: window.location.reload()
 * - iOS/Android: Uses window.location.href re-assignment to avoid WebView crashes or white screens.
 */
export function safeReload() {
  if (typeof window === 'undefined') return;

  if (PLATFORM.isIOS) {
    // iOS WebView friendly reload
    console.log('📱 [Platform] Performing safe iOS reload');
    window.location.href = window.location.href;
  } else {
    // Standard reload
    console.log('💻 [Platform] Performing standard reload');
    window.location.reload();
  }
}

/**
 * Checks if the code is running in a browser environment (client-side).
 */
export const isClient = typeof window !== 'undefined';

/**
 * Gets safe area insets if available (CSS variables).
 * Useful for imperative positioning logic.
 */
export function getSafeAreas() {
  if (!isClient) return { top: 0, bottom: 0 };
  
  const style = getComputedStyle(document.documentElement);
  return {
    top: style.getPropertyValue('--sat') || '0px',
    bottom: style.getPropertyValue('--sab') || '0px'
  };
}
