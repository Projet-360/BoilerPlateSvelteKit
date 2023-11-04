import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute } from './index2-e7c7a387.js';
import './auth-c0c97d71.js';
import { e as t2 } from './index-3f0a5fd7.js';
import './index4-d267215c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => value);
  let users = [];
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-jic9p0_START -->${$$result.title = `<title>exemple Page</title>`, ""}<meta name="description" content="meta description for about page."><!-- HEAD_svelte-jic9p0_END -->`, ""}

<div class="page"><div class="page-container"><h1>Tableau de bord administrateur</h1>

		${each(users, (user) => {
    return `<div class="page-container"><form><label for="username">Nom d&#39;utilisateur</label>
					<input id="username" type="text"${add_attribute("value", user.username, 0)}>

					<label for="email">Email</label>
					<input id="email" type="email"${add_attribute("value", user.email, 0)}>

					<label for="role">Rôle</label>
					<select id="role"><option value="user">Utilisateur</option><option value="admin">Admin</option><option value="moderator">Modérateur</option></select>

					<button type="submit">Mettre à jour</button></form>
			</div>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2bc23f38.js.map
