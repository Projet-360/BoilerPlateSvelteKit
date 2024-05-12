import { messageNotification } from "$lib/utils/messageNotification";

const handleErrors = (error: any, $t: TS.TranslationFunction, context: string) => {
    console.error(`Error during ${context}:`, JSON.stringify(error, null, 2));
    messageNotification(error, $t);
};

export default handleErrors