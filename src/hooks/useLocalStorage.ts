export function useLocalStorage(key: string) {
  const getItem = () => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key)
    }
  }
  const setItem = (value: string) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value)
    }
  }
  const removeItem = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key)
    }
  }

  return { getItem, setItem, removeItem }
}
