const prerender = true;
async function load({ session }) {
  if (!session || !session.token) {
    return {
      status: 403,
      redirect: "/"
    };
  }
  return {
    props: {}
  };
}
export {
  load,
  prerender
};
