// Importations nécessaires
import client from '$apollo';
import { writable } from 'svelte/store'; // Importation si nécessaire pour le store
import { CHECKAUTH } from '$apollo/AuthGQL'; // Importation des requêtes GraphQL

// Supposons que `update` est une méthode de mise à jour de votre store Svelte.
// Si `update` est une méthode personnalisée, assurez-vous de l'importer ou de la définir correctement.
const { update } = writable<App.IAuthStore>();

// Définition de la fonction checkAuth
export async function checkAuth() {
    try {
        const { data } = await client.query({
            query: CHECKAUTH,
            fetchPolicy: 'network-only'
        });     
        
        if (data && data.checkAuth.userId !== null && data.checkAuth.role !== null ) {
            update(state => ({
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
