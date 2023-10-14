// import jwt from 'jsonwebtoken';
// import { env } from './env.js';

// export async function handle({ request, resolve }) {
// 	// Parse cookies
// 	const cookies = request.headers.cookie.split('; ').reduce((acc, cookie) => {
// 		const [key, value] = cookie.split('=');
// 		acc[key] = value;
// 		return acc;
// 	}, {});

// 	const token = cookies['token'];

// 	try {
// 		// Verify and decode the JWT
// 		const userData = jwt.verify(token, env.SECRETKEY);

// 		// Add user data to session
// 		request.locals.session = { ...userData };

// 		// Extract the role from the decoded JWT
// 		const { role } = userData;

// 		// Initialize the URL pathname
// 		const url = new URL(request.url);

// 		// Mapping of routes to roles
// 		const routeRolesMap = {
// 			'/dashboard': ['admin'],
// 			'/user': ['user']
// 		};

// 		// Check if the user role is allowed for the requested route
// 		if (routeRolesMap.hasOwnProperty(url.pathname) && !routeRolesMap[url.pathname].includes(role)) {
// 			return {
// 				status: 403,
// 				body: "Vous n'êtes pas autorisé à accéder à cette page."
// 			};
// 		}

// 		// If everything is fine, proceed with the request
// 		const response = await resolve(request);

// 		return {
// 			...response,
// 			headers: {
// 				...response.headers
// 			}
// 		};
// 	} catch (e) {
// 		console.error('Invalid token:', e);
// 		return {
// 			status: 403,
// 			body: 'Access denied, invalid or expired token.'
// 		};
// 	}
// }
