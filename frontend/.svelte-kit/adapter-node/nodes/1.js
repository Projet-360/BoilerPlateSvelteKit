

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e0cecf7b.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/stores.44f12968.js","_app/immutable/chunks/singletons.651110e3.js","_app/immutable/chunks/index.be155689.js"];
export const stylesheets = [];
export const fonts = [];
