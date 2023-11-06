import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0a9a969a.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/auth.0ff510f7.js","_app/immutable/chunks/messageNotification.9641e709.js","_app/immutable/chunks/singletons.a2ac07bd.js","_app/immutable/chunks/stores.3ba34dbf.js","_app/immutable/chunks/cursorHelpers.168fb9a7.js"];
export const stylesheets = ["_app/immutable/assets/0.91337714.css"];
export const fonts = [];
