import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import type { ViewStyle, ViewProps as DefaultViewProps, StyleProp } from 'react-native'
// eslint-disable-next-line no-restricted-imports
import { View as DefaultView } from 'react-native'

import { styles } from './styles'
import Colors from '@/constants/Colors'

export interface ViewProps extends DefaultViewProps {
  flex?: boolean
  block?: boolean
  center?: boolean
  horizontal?: boolean
  space?: boolean
  gradient?: boolean
  top?: number
  left?: number
  borderRadius?: number
  borderWidth?: number
  style?: StyleProp<ViewStyle> | undefined
  contentStyle?: StyleProp<ViewStyle> | undefined
  containerStyle?: StyleProp<ViewStyle> | undefined
}

export const View: React.FC<ViewProps> = ({
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
  space,
  top,
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
        {...props}
        colors={[Colors.blueViolet, Colors.steelPink]}
      >
        <DefaultView
          style={[
            center && styles.center,
            horizontal && styles.horizontal,
            space && styles.space,
            { backgroundColor: Colors.white, borderRadius: borderRadius - 1 },
            contentStyle,
          ]}
        >
          {children}
        </DefaultView>
      </LinearGradient>
    )
  } else {
    return (
      <DefaultView
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
      </DefaultView>
    )
  }
}
