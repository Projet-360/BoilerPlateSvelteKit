import { messageNotification } from "$modelNotifications/messageNotification";

export const handleErrors = (error: any, $t: App.TranslationFunction, context: string) => {
    console.error(`Error during ${context}:`, JSON.stringify(error, null, 2));
    messageNotification(error, $t);
};