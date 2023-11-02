import { c as create_ssr_component, a as each, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/auth.js";
import "../../../chunks/notificationStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let users = [];
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
export {
  Page as default
};
