import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
  const { user } = locals
  if (user.role === 'admin') {
    console.log("Rôle d'utilisateur valide")
    return {
      props: {
        user,
      },
    }
  }

  if (user.role !== 'admin') {
    console.log("Rôle d'utilisateur non valide")
    throw redirect(307, '/')
  }
}
