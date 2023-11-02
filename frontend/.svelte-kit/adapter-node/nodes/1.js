

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ae3a01b5.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/stores.baedd643.js","_app/immutable/chunks/singletons.c69f1815.js","_app/immutable/chunks/index.d28b6c62.js"];
export const stylesheets = [];
export const fonts = [];
