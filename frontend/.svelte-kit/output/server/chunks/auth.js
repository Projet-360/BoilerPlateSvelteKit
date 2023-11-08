import { w as writable } from "./index4.js";
import "./notificationStore.js";
import "./index.js";
const authStore = writable({
  userId: null,
  role: null,
  isAuthenticated: false,
  currentSessionId: void 0,
  // Initialisez à undefined ou null
  sessions: []
  // Initialisez avec un tableau vide
});
authStore.subscribe((state) => {
});
export {
  authStore as a
};
