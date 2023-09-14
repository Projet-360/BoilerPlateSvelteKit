import { writable } from 'svelte/store';

const authStore = writable({
  token: null,
  userId: null,
});

export default authStore;
