import { c as create_ssr_component, a as subscribe, e as escape } from './index2-e7c7a387.js';
import './auth-c0c97d71.js';
import { e as t2 } from './index-3f0a5fd7.js';
import './index4-d267215c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-l5xncd_START -->${$$result.title = `<title>${escape($t("user.title"))}</title>`, ""}<meta name="description" content="This is your user dashboard."><!-- HEAD_svelte-l5xncd_END -->`, ""}

<div class="page"><div class="page-container"><h1>${escape($t("user.title"))}</h1>
		${`<h2>${escape($t("user.loader"))}</h2>`}
		<a href="/about">${escape($t("user.button"))}</a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d30157c6.js.map
