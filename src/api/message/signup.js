import { goto } from "$app/navigation";
import notificationStore from "$stores/notificationStore";

export const signupValidation = (result, $t) => {
  if (result.success) {
    goto("/");
    notificationStore.addNotification(
      $t("validation.SUCCESS_INSCRIPTION"),
      "success",
    );
  } else {
    let errorMessage;
    switch (result.message) {
      case "Email already exists":
        errorMessage = $t("validation.EMAIL_EXIST");
        break;
      case "USERNAME_REQUIRED":
        errorMessage = $t("validation.USERNAME_REQUIRED");
        break;
      case "VALID_EMAIL":
        errorMessage = $t("validation.VALID_EMAIL");
        break;
      case "VALID_USERNAME":
        errorMessage = $t("validation.VALID_USERNAME");
        break;
      case "NUMBE_CARAC_PASSWORD":
        errorMessage = $t("validation.NUMBE_CARAC_PASSWORD");
        break;
      case "MIN_PASSWORD":
        errorMessage = $t("validation.MIN_PASSWORD");
        break;
      case "MAJ_PASSWORD":
        errorMessage = $t("validation.MAJ_PASSWORD");
        break;
      case "NUMBER_PASSWORD":
        errorMessage = $t("validation.NUMBER_PASSWORD");
        break;
      case "SPECIAL_CARAC_PASSWORD":
        errorMessage = $t("validation.SPECIAL_CARAC_PASSWORD");
        break;
      default:
        errorMessage = "Une erreur inconnue s'est produite.";
    }
    notificationStore.addNotification(errorMessage, "error");
  }
};
