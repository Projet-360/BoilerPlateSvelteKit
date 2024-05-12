import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.VITE_SECRETKEY as string)

    return decoded
  } catch (error) {
    console.error('JWT Verification Error:', error)
    throw error
  }
}

export async function handle({ event, resolve }) {
  const cookies = event.cookies.get(process.env.TOKEN_NAME as string)
  console.log('cookie from hook', cookies)

  if (cookies) {
    const user = await verifyToken(cookies)

    if (user) {
      event.locals.user = user
      //console.log('User est ajouté aux locals:', event.locals.user);
    }
  }

  const response = await resolve(event)
  return response
}
