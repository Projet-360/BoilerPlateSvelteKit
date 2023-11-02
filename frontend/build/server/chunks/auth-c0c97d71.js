import { w as writable } from './index4-d267215c.js';
import './index-3f0a5fd7.js';

const initialNotifications = [];
const notifications = writable(initialNotifications);
function addNotification(message, type) {
  const id = (/* @__PURE__ */ new Date()).getTime();
  notifications.update((currentNotifications) => [...currentNotifications, { id, message, type }]);
}
function removeNotification(id) {
  notifications.update(
    (currentNotifications) => currentNotifications.filter((notif) => notif.id !== id)
  );
}
const notificationStore = {
  subscribe: notifications.subscribe,
  addNotification,
  removeNotification
};

const authStore = writable({
  userId: null,
  role: null,
  isAuthenticated: false
});
authStore.subscribe((state) => {
});

export { authStore as a, notificationStore as n };
//# sourceMappingURL=auth-c0c97d71.js.map
