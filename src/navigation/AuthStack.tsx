import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { AuthStackParamList } from '@/types/Navigation'
// import {
//   Connect,
//   ForgotPassword,
//   Kyc,
//   Login,
//   MailCheck,
//   Main,
//   NewPassword,
//   PasswordResetDone,
//   Register,
//   Verify,
//   Welcome,
// } from "screens";

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Main'}
    >
      {/* <Stack.Screen name={"Main"} component={Main} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Register"} component={Register} />
      <Stack.Screen name={"Welcome"} component={Welcome} />
      <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
      <Stack.Screen name={"Kyc"} component={Kyc} />
      <Stack.Screen name={"MailCheck"} component={MailCheck} />
      <Stack.Screen name={"NewPassword"} component={NewPassword} />
      <Stack.Screen name={"PasswordResetDone"} component={PasswordResetDone} />
      <Stack.Screen name={"Connect"} component={Connect} />
      <Stack.Screen name={"Verify"} component={Verify} /> */}
    </Stack.Navigator>
  )
}
