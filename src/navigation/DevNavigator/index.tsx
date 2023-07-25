import DevMenu from '@/screens/Dev/'
import FixedFooterPlayground from '@/screens/Dev/FixedFooterPlayground'
// import FormsPlayground from '@/screens/Dev/FormsPlayground'
import StoryBook from '@/screens/Dev/StoryBook'
import type { DevStackParamList } from '@/types/Navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator<DevStackParamList>()

const DevNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <Stack.Screen name={'DevMenu'} component={DevMenu} />
    <Stack.Screen name={'DevStoryBook'} component={StoryBook} />
    {/* <Stack.Screen name={'FormsPlayground'} component={FormsPlayground} /> */}
    <Stack.Screen
      name={'FixedFooterPlayground'}
      component={FixedFooterPlayground}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default DevNavigator
