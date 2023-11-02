import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.d6dc7ba0.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/cursorHelpers.05cb0207.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/notificationStore.6f5071e2.js"];
export const stylesheets = ["_app/immutable/assets/2.df2daf6c.css"];
export const fonts = [];
