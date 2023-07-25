import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
const useCurrentLocale = () => {
  const {
    isLoading,
    data: selectedLocale,
    error,
  } = useQuery<'en' | 'de' | null>(['selected-locale'], () => {
    return AsyncStorage.getItem('selected-locale') as Promise<'en' | 'de' | null>
  })

  const updateLocale = useCallback(
    (newLocale: 'en' | 'de'): boolean => {
      if (isLoading || error) return false

      if (newLocale === selectedLocale) return false

      AsyncStorage.setItem('selected-locale', newLocale)
      // TODO fix this
      // RNRestart.Restart()
      return true
    },
    [error, isLoading, selectedLocale],
  )

  return {
    isLoading,
    selectedLocale,
    updateLocale,
  }
}

export default useCurrentLocale
