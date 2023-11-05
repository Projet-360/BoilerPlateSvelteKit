

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0bb0703e.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/stores.054eef72.js","_app/immutable/chunks/singletons.8938bbe8.js","_app/immutable/chunks/index.be155689.js"];
export const stylesheets = [];
export const fonts = [];
