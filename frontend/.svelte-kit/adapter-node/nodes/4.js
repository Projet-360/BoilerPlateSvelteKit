import * as universal from '../entries/pages/dashboard/_page.ts.js';
import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+page.ts";
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.9d25c4fd.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/singletons.a2ac07bd.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/auth.0ff510f7.js","_app/immutable/chunks/messageNotification.9641e709.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
