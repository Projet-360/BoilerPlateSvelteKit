import { r as redirect } from './index3-64aa7a5e.js';

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null
});

async function load({ locals }) {
  const { user } = locals;
  if (user && user.role === "admin") {
    console.log("Rôle d'utilisateur valide");
    return {
      props: {
        user
      }
    };
  }
  if (!user) {
    throw redirect(307, "/");
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2bc23f38.js')).default;
const universal_id = "src/routes/dashboard/+page.ts";
const server_id = "src/routes/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/4.b94d64c3.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/auth.c9fc17a0.js","_app/immutable/chunks/notificationStore.e8f881ab.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/singletons.cb73de64.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-6481b411.js.map
