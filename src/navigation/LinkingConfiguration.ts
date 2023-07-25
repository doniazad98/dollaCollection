/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import type { RootStackParamList } from '@/types/Navigation'
import type { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

const linking: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      HomeTab: {},
    },
  },
  prefixes: [Linking.createURL('/')],
}

export default linking
