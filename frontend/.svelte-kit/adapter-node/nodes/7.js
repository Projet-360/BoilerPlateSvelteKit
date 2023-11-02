import * as universal from '../entries/pages/login/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/login/+page.ts";
export const imports = ["_app/immutable/nodes/7.e7ac5b94.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/auth.49264929.js","_app/immutable/chunks/notificationStore.6f5071e2.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/singletons.8869f9cf.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
