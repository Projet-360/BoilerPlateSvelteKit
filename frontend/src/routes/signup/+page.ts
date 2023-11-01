// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ session }) {
  if (!session || !session.token) {
    return {
      status: 403,
      redirect: "/",
    };
  }

  return {
    props: {},
  };
}
