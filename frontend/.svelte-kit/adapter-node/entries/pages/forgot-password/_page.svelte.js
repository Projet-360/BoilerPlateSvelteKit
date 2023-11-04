import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute } from "../../../chunks/index2.js";
import { e as t } from "../../../chunks/index.js";
import "../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let email = "";
  $$unsubscribe_t();
  return `<main><h1>${escape($t("forgot-password.title"))}</h1>
	<form><label for="email">${escape($t("forgot-password.subtitle"))}</label>
		<input data-testid="email-input" type="email" id="email" required${add_attribute("value", email, 0)}>
		<button data-testid="submit-button" type="button">${escape($t("forgot-password.button"))}</button></form></main>`;
});
export {
  Page as default
};
