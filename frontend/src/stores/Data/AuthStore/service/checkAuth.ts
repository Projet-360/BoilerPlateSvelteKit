// Importations nécessaires
import client from '$apollo';
import { CHECKAUTH } from '$apollo/Auth/checkAuth';
import { authStore } from '../authStore';


// Définition de la fonction checkAuth
export async function checkAuth() {
    try {
        const { data } = await client.query({
            query: CHECKAUTH,
            fetchPolicy: 'network-only'
        });
        
        if (data && data.checkAuth.userId !== null && data.checkAuth.role !== null ) {
            authStore.update(state => ({
                ...state,
                userId: data.checkAuth.userId,
                role: data.checkAuth.role,
                isAuthenticated:  data.checkAuth.isAuthenticated,
                userData: {
                    username: data.checkAuth.userData.username,
                    email: data.checkAuth.userData.email,
                }
            }));
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}
