/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'
import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined
  HomeTab: NavigatorScreenParams<HomeTabParamList> | undefined
  Dev: NavigatorScreenParams<DevStackParamList> | undefined
  PropertyDetails: undefined
}

export type AuthStackParamList = {
  Main: undefined
  Login: undefined
  Register: undefined
  Welcome: undefined
  ForgotPassword: undefined
  Kyc: undefined
  MailCheck: undefined
  NewPassword: undefined
  PasswordResetDone: undefined
  Connect: undefined
  Verify: undefined
}

export type DevStackParamList = {
  DevStoryBook: undefined
  DevMenu: undefined
  FormsPlayground: undefined
  FixedFooterPlayground: undefined
}

export type HomeTabParamList = {
  Properties: undefined
  Market: undefined
  Portfolio: undefined
  Wallet: undefined
  Profile: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type RootStackNavigationProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>

export type RootStackRouteProp<Screen extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Screen
>

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>

export type AuthStackNavigationProps<Screen extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, Screen>

export type AuthStackRouteProp<Screen extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  Screen
>

export type DevStackScreenProps<Screen extends keyof DevStackParamList> = NativeStackScreenProps<
  DevStackParamList,
  Screen
>

export type DevStackNavigationProps<Screen extends keyof DevStackParamList> =
  NativeStackNavigationProp<DevStackParamList, Screen>

export type DevStackRouteProp<Screen extends keyof DevStackParamList> = RouteProp<
  DevStackParamList,
  Screen
>

export type HomeTabScreenProps<Screen extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>

export type HomeTabNavigationProps<Screen extends keyof HomeTabParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, Screen>,
  NativeStackNavigationProp<RootStackParamList>
>
