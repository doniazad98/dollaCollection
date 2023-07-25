import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
          'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
          // icomoon: require('../assets/fonts/icomoon.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        await SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
