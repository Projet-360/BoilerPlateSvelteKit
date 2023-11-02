import { c as create_ssr_component, s as subscribe, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as t } from "../../../../chunks/index.js";
import "../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_page;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `<h1>${escape($t("signup.verifytoken"))}</h1>`;
});
export {
  Page as default
};
