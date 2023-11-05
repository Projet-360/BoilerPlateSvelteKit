import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.81370119.js","_app/immutable/chunks/index.42327729.js","_app/immutable/chunks/cursorHelpers.168fb9a7.js","_app/immutable/chunks/index.be155689.js","_app/immutable/chunks/index.5b6d48fd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/messageNotification.9641e709.js"];
export const stylesheets = ["_app/immutable/assets/2.df2daf6c.css"];
export const fonts = [];
