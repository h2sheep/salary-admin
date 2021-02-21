

export interface IUseLocalstorage {
  setLocalstorage: (name: string, value: string) => void
  getLocalstorage: (name: string) => string | null
  removeLocalstorage: (name: string) => void
}

export function useLocalstorage(): IUseLocalstorage {

  const setLocalstorage = (name: string, value: string): void => {
    localStorage.setItem(name, value)
  }

  const getLocalstorage = (name: string): string | null => {
    return localStorage.getItem(name)
  }

  const removeLocalstorage = (name: string): void => {
    localStorage.removeItem(name)
  }

  return {
    setLocalstorage,
    getLocalstorage,
    removeLocalstorage
  }
}