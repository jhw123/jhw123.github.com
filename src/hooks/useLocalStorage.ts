import { useCallback } from 'react'

export function useLocalStorage(key: string) {
  const getItem = useCallback(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key)
    }
  }, [key])

  const setItem = useCallback(
    (value: string) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value)
      }
    },
    [key]
  )

  const removeItem = useCallback(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key)
    }
  }, [])

  return { getItem, setItem, removeItem }
}
