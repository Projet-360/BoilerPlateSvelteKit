import { c as create_ssr_component, s as subscribe, e as escape, b as add_attribute } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as t } from "../../../../chunks/index.js";
import "../../../../chunks/notificationStore.js";
import "../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_page;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
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
export {
  Page as default
};
