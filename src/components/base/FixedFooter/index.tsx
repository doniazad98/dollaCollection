import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { ViewProps } from 'react-native'

import { View } from '@/components/base/View'

import Spacing from '@/constants/Spacing'
import { styles } from './styles'

export type FixedFooterProps = ViewProps & {
  currentStep: number
}

export const FixedFooter = ({ children }: FixedFooterProps) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingBottom: bottom + Spacing.vertical.size20 }]}>
      {children}
    </View>
  )
}
