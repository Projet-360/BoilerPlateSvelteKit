

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ea622a83.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/stores.a2f13912.js","_app/immutable/chunks/singletons.1fce92bb.js","_app/immutable/chunks/index.be155689.js"];
export const stylesheets = [];
export const fonts = [];
