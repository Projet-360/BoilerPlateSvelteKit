import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
  const { user } = locals

  if (user && user.role === 'user') {
    console.log("Rôle d'utilisateur valide")
    return {
      props: {
        user,
      },
    }
  }

  if (!user || user.role !== 'user') {
    throw redirect(307, '/')
  }
}
