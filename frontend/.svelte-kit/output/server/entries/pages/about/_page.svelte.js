import { c as create_ssr_component, s as subscribe, e as escape } from "../../../chunks/index2.js";
import { e as t } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""}

<div><h1>${escape($t("about.title"))}</h1>
	<p><!-- HTML_TAG_START -->${$t("about.text")}<!-- HTML_TAG_END --></p>
	<a href="/">${escape($t("about.link"))}</a></div>`;
});
export {
  Page as default
};
