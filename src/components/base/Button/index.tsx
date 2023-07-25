import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import type { StyleProp, ViewStyle } from 'react-native'

import type { CustomPressableProps } from '../Pressable'

import { Pressable } from '../Pressable'
import { Text } from '../Text'

import Colors from '@/constants/Colors'
import { styles, variantsStyles } from './styles'

export type ButtonProps = CustomPressableProps & {
  variant: keyof typeof variantsStyles
  text: string
  style?: StyleProp<ViewStyle>
  isLoading?: boolean
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, variant, style, isLoading, disabled, ...others } = props
  const onPress = isLoading || disabled ? null : props.onPress

  if (variant == 'primary') {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          variantsStyles.primary.pressableStyle,
          disabled && variantsStyles.primary.pressableDisabled,
          style,
          {
            top: others.top,
          },
        ]}
        colors={[Colors.blueViolet, Colors.steelPink]}
      >
        <Pressable
          onPress={onPress}
          style={[variantsStyles.primary.pressableStyle]}
          center
          {...others}
        >
          {isLoading ? (
            <View style={[styles.loadingContainer]}>
              <ActivityIndicator color={Colors.white} size='large' />
            </View>
          ) : (
            <Text variant='b1' style={variantsStyles.primary.typographyStyle} color={'white'}>
              {text}
            </Text>
          )}
        </Pressable>
      </LinearGradient>
    )
  } else {
    return (
      <Pressable
        center
        onPress={onPress}
        android_ripple={{ radius: 100 }}
        style={[
          variantsStyles[variant].pressableStyle,
          disabled && variantsStyles[variant].pressableDisabled,
          style,
        ]}
        {...others}
      >
        {isLoading ? (
          <View style={[styles.loadingContainer]}>
            <ActivityIndicator color={Colors.veronica} size='large' />
          </View>
        ) : (
          <Text variant='b1' style={variantsStyles[variant].typographyStyle}>
            {text}
          </Text>
        )}
      </Pressable>
    )
  }
}
