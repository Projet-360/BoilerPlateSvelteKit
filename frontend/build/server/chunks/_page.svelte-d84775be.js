import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from './index2-e7c7a387.js';
import { p as page } from './stores-69cb4eb4.js';
import { e as t2 } from './index-3f0a5fd7.js';
import './auth-c0c97d71.js';
import './index4-d267215c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_page;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let newPassword = "";
  let confirmPassword = "";
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `<main><h1>${escape($t("forgot-password-token.title"))}</h1>
	<form><label for="newPassword">${escape($t("forgot-password-token.newPassword"))}</label>
		<input data-testid="newPassword-input" type="password" id="newPassword" required${add_attribute("value", newPassword, 0)}>

		<label for="confirmPassword">${escape($t("forgot-password-token.confirmPassword"))}</label>
		<input data-testid="confirmPassword-input" type="password" id="confirmPassword" required${add_attribute("value", confirmPassword, 0)}>

		<button data-testid="submit-button" type="button">${escape($t("forgot-password-token.link"))}</button></form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d84775be.js.map
