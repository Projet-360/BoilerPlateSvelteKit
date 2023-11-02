import { c as create_ssr_component, a as subscribe, e as escape } from './index2-e7c7a387.js';
import { p as page } from './stores-69cb4eb4.js';
import { e as t2 } from './index-3f0a5fd7.js';
import './auth-c0c97d71.js';
import './index4-d267215c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_page;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `<h1>${escape($t("signup.verifytoken"))}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-73567f70.js.map
