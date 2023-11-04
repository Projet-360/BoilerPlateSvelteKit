

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.73cff231.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/stores.3d8b7b09.js","_app/immutable/chunks/singletons.333ca644.js","_app/immutable/chunks/index.d28b6c62.js"];
export const stylesheets = [];
export const fonts = [];
