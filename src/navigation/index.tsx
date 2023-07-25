import * as React from 'react'
import type { ColorSchemeName } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import LinkingConfiguration from './LinkingConfiguration'
import type { RootStackParamList } from '@/types/Navigation'
import AuthStack from './AuthStack'
import DevNavigator from './DevNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Dev'}
    >
      <Stack.Screen name={'Auth'} component={AuthStack} />
      {/* <Stack.Screen name={"HomeTab"} component={HomeTabNavigator} /> */}
      <Stack.Screen name={'Dev'} component={DevNavigator} />
    </Stack.Navigator>
  )
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
