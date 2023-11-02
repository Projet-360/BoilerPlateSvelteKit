import { w as writable } from "./index4.js";
import "./notificationStore.js";
import "./index.js";
const authStore = writable({
  userId: null,
  role: null,
  isAuthenticated: false
});
authStore.subscribe((state) => {
});
export {
  authStore as a
};
