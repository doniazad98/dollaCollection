import React from 'react'
import type { TextProps, TextStyle } from 'react-native'
// eslint-disable-next-line no-restricted-imports
import { Text as NativeText } from 'react-native'

import type { Colors as TColors } from '@/types/Colors'
import Typography from '@/constants/Typography'
import Colors from '@/constants/Colors'
import { styles } from './styles'

export type TypographyProps = TextProps & {
  variant: keyof typeof Typography
  style?: TextStyle | TextStyle[]
  color?: TColors
  center?: boolean
  flex?: boolean
  top?: number
  left?: number
}

export const Text: React.FC<TypographyProps> = ({
  variant,
  style,
  color,
  center,
  flex,
  top,
  left,
  ...props
}) => {
  const typoStyle = Typography[variant]
  const colorName = color ?? 'codgray'

  return (
    <NativeText
      {...props}
      style={[
        typoStyle,
        {
          color: Colors[colorName],
        },
        center && styles.center,
        flex && styles.flex,
        !!top && { marginTop: top },
        !!left && { marginLeft: left },
        style,
      ]}
    >
      {props.children}
    </NativeText>
  )
}
