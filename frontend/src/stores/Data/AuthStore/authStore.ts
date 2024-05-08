// Importations
import { writable} from 'svelte/store';
import client from '$apollo';
import { collectFingerprint } from '$lib/js/fingerPrint';
import { CHECKAUTH, GETDASHBOARDDATA, LOGIN, LOGOUT, REQUEST_ACCOUNT_DELETION, RESETFORGOTNEWPASSWORD, SENDEMAILRESETPASSWORD, SIGNUP, UPDATEUSERINFO, VERIFYTOKEN } from '$apollo/AuthGQL'; 

import { goto } from '$app/navigation';
import notificationStore from '../../UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';
import { handleRoleRedirection } from '$api/utils/handleRoleRedirection';

// Initialisation du store
function createAuthStore() {
    const { subscribe, set, update } = writable<App.IAuthStore>({
        userId: null,
        currentSessionId: undefined,
        role: null,
        isAuthenticated: false,
        sessions: [],
        userData: {
            username: null,
            email: null,
        }
    });

    let currentState = {
        userId: null,
        currentSessionId: undefined,
        role: null,
        isAuthenticated: false,
        sessions: [],
        userData: {
            username: null,
            email: null,
        }
    };
    
    async function checkAuth() {
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

    async function signup(username: string, email: string, password: string, $t: App.TranslationFunction) {
        try {

            const { data } = await client.mutate({
                mutation: SIGNUP,
                variables: { username, email, password }
            });
            notificationStore.addNotification($t('data.signupSuccess'), 'success');
        } catch (error) {
            handleErrors(error, $t, 'signup');
        }
    }

    async function login(email: string, password: string, $t: App.TranslationFunction) {
        try {
            const fingerPrint = await collectFingerprint()
            
            const { data } = await client.mutate({
                mutation: LOGIN,
                variables: { email, password , fingerPrint }
            });
            
            console.log('data', data);
            
            if (data.login && data.login.userId && data.login.role && data.login.sessionId) {
                set({   
                    userId: data.login.userId,
                    currentSessionId: data.login.sessionId,
                    role: data.login.role,
                    isAuthenticated: true,
                    //sessions: [...currentState.sessions, data.login.sessionId],
                    userData: {
                        username: data.login.userData.username,
                        email: data.login.userData.email,
                    }
                });
                notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
                handleRoleRedirection(data.login.role)
            } else {
                notificationStore.addNotification($t('validation.FAIL_LOGIN'), 'error');
            }
        } catch (error) {
            handleErrors(error, $t, 'login');
        }
    }

    async function logout($t: App.TranslationFunction) {
        try {
            const { data } = await client.mutate({
                mutation: LOGOUT
            });

                set({
                    userId: null,
                    currentSessionId: undefined,
                    role: null,
                    isAuthenticated: false,
                    sessions: [],
                    userData: {
                        username: null,
                        email: null,
                    },
                });
                notificationStore.addNotification($t('logout.successLogout'), 'success');
                goto('/');
        } catch (error) {
            console.error("Error during logout:", JSON.stringify(error, null, 2));
            notificationStore.addNotification($t('logout.failedLogout'), 'error');
        }
    }    

    async function verifyToken(token: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.query({
                query: VERIFYTOKEN,
                variables: { token }
            });
            goto('/');
            notificationStore.addNotification($t('data.emailTokenVerifiedSuccess'), 'success');                
        } catch (error) {
            handleErrors(error, $t, 'verifyToken');
            notificationStore.addNotification($t('data.emailTokenVerifiedFailed'), 'error');
        }
    }

    async function sendEmailResetPassword(email: string, $t: App.TranslationFunction) {   
        try {     
            const { data } = await client.mutate({
                mutation: SENDEMAILRESETPASSWORD,
                variables: { email}
            });
            console.log(data);
            
            notificationStore.addNotification($t('data.successSendEmailResetPassword'), 'success');
            goto('/');
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    async function ResetForgotNewPassword(	
        token: string,
        newPassword: string,
        confirmPassword: string,
        $t: App.TranslationFunction) {   
        try {     
            const { data } = await client.mutate({
                mutation: RESETFORGOTNEWPASSWORD,
                variables: { token, newPassword, confirmPassword}
            });
            console.log(data);
            
            notificationStore.addNotification($t('data.successSendResetPassword'), 'success');
            goto('/');
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    // USER
    async function updateUserInfo(userInfo: App.UserInfo, $t: App.TranslationFunction) {
        try {
            const headers = new Headers();
            const { data } = await client.mutate({
                mutation: UPDATEUSERINFO,
                variables: { userInfo }
            });
            console.log(data);
    
            if (data.success) {
                notificationStore.addNotification($t('validation.UPDATE_SUCCESS'), 'success');
    
                if (data.notification) {
                    notificationStore.addNotification(data.notification, 'success');
                    authStore.logout($t);
                }
                return data;
            } else {
                throw new Error($t('validation.UPDATE_FAILURE'));
            }
        } catch (error) {
            messageNotification(error, $t);
            throw error;
        }
    };

    async function getDashboardData() {
        try {
            const headers = new Headers();
            const { data } = await client.query({
                query: GETDASHBOARDDATA,
                fetchPolicy: 'network-only'  
            });
            return data;
        } catch (error) {
            throw error;
        }
    }
    

    async function requestAccountDeletion(id: string, $t: App.TranslationFunction) {
        try {
            const headers = new Headers();
            const { data } = await client.mutate({
                mutation: REQUEST_ACCOUNT_DELETION,
                variables: { id }
            });
            console.log(data);
    
            if (data.success) {
                notificationStore.addNotification($t('validation.DELETE_ACCOUNT_EMAIL_SENT'), 'success');
            }
        } catch (error) {
            messageNotification(error, $t);
            throw error;
        }
    }
    
    async function confirmAccountDeletion(token: string) {
    }

//     async function sessions(req: Request, res: Response) {
//         if (!req.user || !req.user._id) {
//         console.log('Utilisateur non authentifié dans /sessions');
//         return res.status(401).json({ message: 'Utilisateur non authentifié' });
//         }

//         try {
//         const sessions = await Session.find({ userId: req.user._id }).exec();
//         console.log('sessions', sessions);
//         res.json(
//             sessions.map((s) => ({
//             id: s._id,
//             userAgent: s.userAgent,
//             browser: s.browser, // Assurez-vous que ces champs existent dans votre modèle
//             os: s.os, // Assurez-vous que ces champs existent dans votre modèle
//             device: s.device, // Assurez-vous que ces champs existent dans votre modèle
//             ip: s.ip,
//             createdAt: s.createdAt,
//             })),
//         );
//         } catch (error) {
//         console.error('Erreur lors de la récupération des sessions', error);
//         res.status(500).json({ message: 'Erreur interne du serveur' });
//         }
//     };
  
//   async function  sessionID(
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) {
//     const { sessionId } = req.params;
  
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: 'Utilisateur non authentifié' });
//     }
  
//     try {
//       const session = await Session.findOneAndDelete({
//         _id: sessionId,
//         userId: req.user._id,
//       }).exec();
  
//       if (!session) {
//         return res
//           .status(404)
//           .json({ message: 'Session non trouvée ou déjà fermée' });
//       }
  
//       // Supposons que le token est stocké dans un cookie nommé 'token'
//       const token = req.cookies.token;
//       if (token) {
//         const newBlacklistedToken = new BlacklistedToken({ token });
//         await newBlacklistedToken.save();
//         res.clearCookie('token');
//       }
  
//       res.json({ message: 'Session fermée avec succès' });
//     } catch (error) {
//       console.error('Erreur lors de la fermeture de la session :', error);
//       return res.status(500).json({ message: 'Erreur interne du serveur' });
//     }
//   };

    const handleErrors = (error: any, $t: App.TranslationFunction, context: string) => {
        console.error(`Error during ${context}:`, JSON.stringify(error, null, 2));
        messageNotification(error, $t);
    };

    return {
        subscribe,
        signup,
        verifyToken,
        login,
        logout,
        checkAuth,
        sendEmailResetPassword,
        ResetForgotNewPassword,
        updateUserInfo,
        getDashboardData,
        requestAccountDeletion,
        confirmAccountDeletion,
        // sessions,
        // sessionID
    };
}

// Exportation du store
export const authStore = createAuthStore();
