import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.12fd7818.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/auth.49264929.js","_app/immutable/chunks/notificationStore.6f5071e2.js","_app/immutable/chunks/singletons.8869f9cf.js","_app/immutable/chunks/stores.fbd63435.js","_app/immutable/chunks/cursorHelpers.05cb0207.js"];
export const stylesheets = ["_app/immutable/assets/0.91337714.css"];
export const fonts = [];
