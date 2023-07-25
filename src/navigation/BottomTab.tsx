// import * as React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import type { HomeTabParamList } from './types'
// // import { View } from 'components/base/View'
// // import { Icon } from 'components/base/Icon'
// import { Colors, Dimensions } from 'constantStyles'
// import { Home, Market, Portfolio, Profile, Wallet } from 'screens'
// import styles from 'navigation/styles'

// const BottomTab = createBottomTabNavigator<HomeTabParamList>()

// export default function HomeTabNavigator() {
//   const insets = useSafeAreaInsets()
//   return (
//     <BottomTab.Navigator
//       initialRouteName={'Properties'}
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.martinique,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: insets.bottom + Dimensions.height.size64,
//         },
//       }}
//     >
//       <BottomTab.Screen
//         name={'Properties'}
//         component={Home}
//         options={() => ({
//           tabBarIcon: ({ focused }) => (
//             <View center>
//               <Icon name={'widgets'} color={'mulledwine'} size={24} />
//               {focused && <View style={styles.indicator} />}
//             </View>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name={'Market'}
//         component={Market}
//         options={() => ({
//           tabBarIcon: ({ focused }) => (
//             <View center>
//               <Icon name={'bag'} color={'mulledwine'} size={24} />
//               {focused && <View style={styles.indicator} />}
//             </View>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name={'Portfolio'}
//         component={Portfolio}
//         options={() => ({
//           tabBarIcon: ({ focused }) => (
//             <View center>
//               <Icon name={'chart'} color={'mulledwine'} size={24} />
//               {focused && <View style={styles.indicator} />}
//             </View>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name={'Wallet'}
//         component={Wallet}
//         options={() => ({
//           tabBarIcon: ({ focused }) => (
//             <View center>
//               <Icon name={'wallet'} color={'mulledwine'} size={24} />
//               {focused && <View style={styles.indicator} />}
//             </View>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name={'Profile'}
//         component={Profile}
//         options={() => ({
//           tabBarIcon: ({ focused }) => (
//             <View center>
//               <Icon name={'profile'} color={'mulledwine'} size={24} />
//               {focused && <View style={styles.indicator} />}
//             </View>
//           ),
//         })}
//       />
//     </BottomTab.Navigator>
//   )
// }
