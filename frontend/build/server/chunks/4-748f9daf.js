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
  throw redirect(307, "/");
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-46c82eca.js')).default;
const universal_id = "src/routes/dashboard/+page.ts";
const server_id = "src/routes/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/4.c5668b18.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/auth.49264929.js","_app/immutable/chunks/notificationStore.6f5071e2.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/singletons.8869f9cf.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-748f9daf.js.map
