import * as universal from '../entries/pages/login/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/login/+page.ts";
export const imports = ["_app/immutable/nodes/7.4adf21ea.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/auth.0ff510f7.js","_app/immutable/chunks/messageNotification.9641e709.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/singletons.a2ac07bd.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
