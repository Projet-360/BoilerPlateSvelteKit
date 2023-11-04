import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import { e as t } from "../../../chunks/index.js";
import "../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let email = "";
  let password = "";
  $$unsubscribe_t();
  return `<div class="page"><div class="page-container"><form><input data-testid="email-input" id="email-input" type="text" placeholder="Email"${add_attribute("value", email, 0)}>
			<input data-testid="password-input" id="password-input" type="password" placeholder="Password"${add_attribute("value", password, 0)}>
			<button data-testid="submit-button" type="submit">${escape($t("login.button"))}</button></form>
		<button>${escape($t("login.link"))}</button></div></div>`;
});
export {
  Page as default
};
