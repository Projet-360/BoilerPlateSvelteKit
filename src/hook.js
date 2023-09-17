export async function handle({ request, resolve }) {
  // Récupérez votre token JWT à partir des cookies et ajoutez-le à la session
  const cookies = request.headers.cookie;
  const token = // Votre logique pour extraire le token JWT des cookies
    (request.locals.session = { token });

  const response = await resolve(request);

  return {
    ...response,
    headers: {
      ...response.headers,
    },
  };
}
