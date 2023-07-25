import React from 'react'
import { useNavigation } from '@react-navigation/native'

export type RouteNameOrOptions<TParams extends Record<string, unknown> = Record<string, unknown>> =
  | string
  | {
      name: string
      params?: TParams | undefined
      key?: string | undefined
    }

type NavigateCallback = () => void

const useNavigateCallbacks = (...routeNamesOrOptions: RouteNameOrOptions[]): NavigateCallback[] => {
  const { navigate } = useNavigation()
  const refRouteNamesOrOptions = React.useRef(routeNamesOrOptions)
  refRouteNamesOrOptions.current = routeNamesOrOptions

  const { length } = routeNamesOrOptions

  return React.useMemo((): NavigateCallback[] => {
    const navigateCallbacks = []
    for (let idx = 0; idx < length; idx += 1) {
      navigateCallbacks.push((): void => {
        const item = refRouteNamesOrOptions.current[idx]
        // @ts-expect-error fix this later
        navigate(item)
      })
    }
    return navigateCallbacks
  }, [navigate, length])
}

export default useNavigateCallbacks
