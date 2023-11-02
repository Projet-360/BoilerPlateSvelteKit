import { r as redirect } from "../../../chunks/index3.js";
async function load({ locals }) {
  const { user } = locals;
  if (user && user.role === "admin") {
    console.log("Rôle d'utilisateur valide");
    return {
      props: {
        user
      }
    };
  }
  throw redirect(307, "/");
}
export {
  load
};
