/***************************************************************************************************
 * APPLICATION IMPORTS
 */
import 'zone.js';

// Add global to window, assigning the value of window itself.
// @ts-ignore
type GlobalThis = typeof globalThis;
declare const global: GlobalThis;

(window as any)['global'] = window;
global['global'] = window;

// Add browser globals to window
(window as any).process = {
  env: { DEBUG: undefined },
  version: '',
  nextTick: (callback: () => void) => setTimeout(callback, 0)
} as any;
