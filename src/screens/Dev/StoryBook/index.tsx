import React from 'react'
import { View } from '@/components/base/View'
import styles from './styles'
import StorybookUIRoot from '../../../../storybook'

const StoryBook = () => (
  <View style={styles.container}>
    <StorybookUIRoot />
  </View>
)

export default StoryBook
