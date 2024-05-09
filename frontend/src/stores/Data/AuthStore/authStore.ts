// Importations
import { writable} from 'svelte/store';

import { checkAuth } from './service/checkAuth';
import { signup } from './service/signup';
import { login } from './service/login';
import { logout } from './service/logout';
import { verifyToken } from './service/verifyToken';
import { sendEmailResetPassword } from './service/sendEmailResetPassword';
import { ResetForgotNewPassword } from './service/ResetForgotNewPassword';
import { updateUserInfo } from './service/updateUserInfo';
import { getDashboardData } from './service/getDashboardData';
import { requestAccountDeletion } from './service/requestAccountDeletion';

// Initialisation du store
function AuthStore() {
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

    return {
        subscribe,
        set,
        update, 
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
        // sessions,
        // sessionID
    };
}

// Exportation du store
export const authStore = AuthStore();
