

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dd2d5a1c.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/stores.0052c4ba.js","_app/immutable/chunks/singletons.cb73de64.js","_app/immutable/chunks/index.d28b6c62.js"];
export const stylesheets = [];
export const fonts = [];
