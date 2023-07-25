import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import type { ViewStyle, PressableProps, StyleProp } from 'react-native'
// eslint-disable-next-line no-restricted-imports
import { Pressable as NativePressable } from 'react-native'

import { styles } from './styles'
import Colors from '@/constants/Colors'

export interface CustomPressableProps extends PressableProps {
  flex?: boolean
  block?: boolean
  center?: boolean
  horizontal?: boolean
  gradient?: boolean
  space?: boolean
  top?: number
  left?: number
  style?: StyleProp<ViewStyle> | undefined
  contentStyle?: StyleProp<ViewStyle> | undefined
  containerStyle?: StyleProp<ViewStyle> | undefined
  borderRadius?: number
  borderWidth?: number
}

export const Pressable: React.FC<CustomPressableProps> = ({
  borderRadius = 0,
  borderWidth = 1,
  contentStyle,
  containerStyle,
  gradient = false,
  style,
  flex,
  center,
  horizontal,
  block,
  top,
  space,
  left,
  children,
  ...props
}) => {
  if (gradient) {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          block && styles.block,
          flex && styles.flex,
          {
            borderRadius,
            marginLeft: left,
            marginTop: top,
            padding: borderWidth,
          },

          containerStyle,
        ]}
        colors={[Colors.blueViolet, Colors.steelPink]}
      >
        <NativePressable
          style={[
            center && styles.center,
            horizontal && styles.horizontal,
            space && styles.space,
            { backgroundColor: Colors.white, borderRadius: borderRadius - 1 },
            contentStyle,
          ]}
          {...props}
        >
          {children}
        </NativePressable>
      </LinearGradient>
    )
  } else {
    return (
      <NativePressable
        style={[
          flex && styles.flex,
          block && styles.block,
          center && styles.center,
          horizontal && styles.horizontal,
          space && styles.space,
          { marginTop: top },
          { marginLeft: left },
          style,
        ]}
        {...props}
      >
        {children}
      </NativePressable>
    )
  }
}
