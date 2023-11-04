import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/auth.js";
import { e as t } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let username = "";
  let email = "";
  let password = "";
  $$unsubscribe_t();
  return `<div class="page"><div class="page-container"><form><input data-testid="username-input" id="username-input" type="text" placeholder="Username"${add_attribute("value", username, 0)}>
			<input data-testid="email-input" id="email-input" placeholder="Email"${add_attribute("value", email, 0)}>
			<input data-testid="password-input" id="password-input" type="password" placeholder="Password"${add_attribute("value", password, 0)}>
			<button data-testid="submit-button" type="submit">${escape($t("signup.button"))}</button></form></div></div>`;
});
export {
  Page as default
};
