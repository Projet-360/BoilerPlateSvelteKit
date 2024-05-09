// Importations nécessaires
import client from '$apollo';
import { checkAuthGQL } from '$apollo/Auth/checkAuthGQL';
import { authStore } from '../authStore';


// Définition de la fonction checkAuth
async function checkAuthAPI() {
    try {
        const { data } = await client.query({
            query: checkAuthGQL,
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

export default checkAuthAPI