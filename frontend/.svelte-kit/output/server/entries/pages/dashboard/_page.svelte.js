import { c as create_ssr_component, s as subscribe } from "../../../chunks/index2.js";
import "../../../chunks/auth.js";
import "../../../chunks/notificationStore.js";
import { e as t } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-125ri1g_START -->${$$result.title = `<title>Exemple Page</title>`, ""}<meta name="description" content="Meta description for about page."><!-- HEAD_svelte-125ri1g_END -->`, ""}

<div class="page"><div class="page-container"><h1>Tableau de bord administrateur</h1>
		${`<p>Chargement des utilisateurs...</p>`}</div></div>`;
});
export {
  Page as default
};
