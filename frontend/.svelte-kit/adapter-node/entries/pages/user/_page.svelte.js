import { c as create_ssr_component, s as subscribe, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/auth.js";
import { e as t } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-l5xncd_START -->${$$result.title = `<title>${escape($t("user.title"))}</title>`, ""}<meta name="description" content="This is your user dashboard."><!-- HEAD_svelte-l5xncd_END -->`, ""}

<div class="page"><div class="page-container"><h1>${escape($t("user.title"))}</h1>
		${`<h2>${escape($t("user.loader"))}</h2>`}
		<a href="/about">${escape($t("user.button"))}</a></div></div>`;
});
export {
  Page as default
};
