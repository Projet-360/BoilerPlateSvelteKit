import { writable } from "svelte/store";

function localStorageStore(key, initialValue) {
  // Vérifie si on est dans le navigateur
  const isBrowser = typeof window !== "undefined";
  const storedValue = isBrowser ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const store = writable(initial);

  if (isBrowser) {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return store;
}

export { localStorageStore };
