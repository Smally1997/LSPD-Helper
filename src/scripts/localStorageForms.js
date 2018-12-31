export function updateLocalStorage(form, state) {
  localStorage.setItem([form], JSON.stringify(state));
}

export function retrieveLocalStorage(form) {
  if (localStorage.getItem([form]) != null) {
    return JSON.parse(localStorage.getItem([form]));
  }
  return null;
}

export function clearLocalStorage(form) {
  if (localStorage.getItem([form]) != null) {
    localStorage.removeItem([form]);
  }
}
