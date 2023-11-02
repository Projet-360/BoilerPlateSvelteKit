import { r as redirect } from "../../../chunks/index3.js";
async function load({ locals }) {
  const { user } = locals;
  if (user && user.role === "user") {
    console.log("Rôle d'utilisateur valide");
    return {
      props: {
        user
      }
    };
  }
  if (!user) {
    throw redirect(307, "/");
  }
}
export {
  load
};
