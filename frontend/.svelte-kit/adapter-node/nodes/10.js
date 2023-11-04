import * as universal from '../entries/pages/user/_page.ts.js';
import * as server from '../entries/pages/user/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/+page.ts";
export { server };
export const server_id = "src/routes/user/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.244b44b3.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/cursorHelpers.168fb9a7.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/auth.0ce0c8ae.js","_app/immutable/chunks/notificationStore.9cabfd5e.js","_app/immutable/chunks/singletons.1fce92bb.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
