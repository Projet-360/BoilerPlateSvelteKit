import * as universal from '../entries/pages/user/_page.ts.js';
import * as server from '../entries/pages/user/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/+page.ts";
export { server };
export const server_id = "src/routes/user/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.25fcd267.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/cursorHelpers.05cb0207.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/auth.49264929.js","_app/immutable/chunks/notificationStore.6f5071e2.js","_app/immutable/chunks/singletons.8869f9cf.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
