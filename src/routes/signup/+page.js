// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import authStore from '$stores/authStore';
export const prerender = true;

export async function load({ session }) {
  let isAuthenticated = false;

  // Vérifier l'état d'authentification
  authStore.subscribe((value) => {
    isAuthenticated = !!value.token;
  })();

  if (!isAuthenticated) {
    return {
      status: 403,
      redirect: '/login',
    };
  }

  return {
    props: {},
  };
}
