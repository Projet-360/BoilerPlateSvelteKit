import { r as redirect } from './index3-64aa7a5e.js';

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null
});

async function load({ locals }) {
  const { user } = locals;
  if (user && user.role === "user") {
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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d30157c6.js')).default;
const universal_id = "src/routes/user/+page.ts";
const server_id = "src/routes/user/+page.server.ts";
const imports = ["_app/immutable/nodes/10.25fcd267.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/cursorHelpers.05cb0207.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/auth.49264929.js","_app/immutable/chunks/notificationStore.6f5071e2.js","_app/immutable/chunks/singletons.8869f9cf.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-c36d84fa.js.map
