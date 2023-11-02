import { w as writable } from "./index4.js";
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
export {
  notificationStore as n
};
