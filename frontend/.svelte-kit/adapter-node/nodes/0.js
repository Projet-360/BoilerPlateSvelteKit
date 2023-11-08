import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.799a2234.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/auth.80e18647.js","_app/immutable/chunks/messageNotification.9641e709.js","_app/immutable/chunks/singletons.9b2ab02f.js","_app/immutable/chunks/stores.041edf8e.js","_app/immutable/chunks/cursorHelpers.168fb9a7.js"];
export const stylesheets = ["_app/immutable/assets/0.91337714.css"];
export const fonts = [];
