export default {
  append(key: string, value: string) {
    const item = (this as any).getFromLocalStorage(key);
    if (item && !item.find(value)) {
      item.push(value);
      return;
    }
    (this as any).setLocalStorage(key, [value]);
  },

  set(key: string, value: string) {
    if (!this.isAvailable()) { return; }
    window.localStorage.setItem(key, value);
  },

  setObject(key: string, value: string) {
    if (!this.isAvailable()) { return; }
    this.set(key, JSON.stringify(value));
  },

  get(key: string) {
    if (!this.isAvailable()) { return ''; }
    const item = window.localStorage.getItem(key);
    if (item === null || item.length === 0) { return ''; }
    return item;
  },

  getObject(key: string) {
    const stringified = this.get(key);
    try {
      return JSON.parse(stringified);
    } catch (error) {
      return '';
    }
  },

  remove(key: string) {
    if (!this.isAvailable()) { return; }
    window.localStorage.removeItem(key);
  },

  isAvailable() {
    try {
      const storage = window.localStorage;
      const x: string = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  },
};
