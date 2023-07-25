import React from 'react'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import type { IconProps } from '@expo/vector-icons/build/createIconSet'

import type { Colors as TColors } from '@/types/Colors'
import type TIcon from '@/types/Icon'
import Colors from '@/constants/Colors'

import iconsSelection from '../../../../selection.json'

const IconSetFromIcoMoon = createIconSetFromIcoMoon(iconsSelection, 'icomoon', 'icomoon.ttf')

export interface CustomIconProps extends IconProps<string> {
  name: TIcon
  color?: TColors
}

export const Icon = ({ name, color = 'gray', ...others }: CustomIconProps) => (
  <IconSetFromIcoMoon color={Colors[color]} {...others} name={name} />
)
