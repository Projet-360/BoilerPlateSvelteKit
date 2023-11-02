import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from './index2-e7c7a387.js';
import { e as t2 } from './index-3f0a5fd7.js';
import './auth-c0c97d71.js';
import './index4-d267215c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let email = "";
  $$unsubscribe_t();
  return `<main><h1>${escape($t("forgot-password.title"))}</h1>
	<form><label for="email">${escape($t("forgot-password.subtitle"))}</label>
		<input data-testid="email-input" type="email" id="email" required${add_attribute("value", email, 0)}>
		<button data-testid="submit-button" type="button">${escape($t("forgot-password.button"))}</button></form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-047781bb.js.map
