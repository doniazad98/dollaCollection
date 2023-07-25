import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { Button } from '.'
import { View } from '../View'

storiesOf('Button', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('main', () => (
    <View>
      <View style={{ padding: 8 }}>
        <Button variant='primary' text='Primary button' />
        <Button top={12} variant='primary' text='Primary button' isLoading />
      </View>
      <View style={{ padding: 8 }}>
        <Button top={12} variant='outline' text='Outline' />
        <Button top={12} variant='outline' text='Outline' isLoading />
      </View>

      <View top={24} style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
        <Button top={24} variant='text' text='Text button' />
        <Button top={12} variant='text' text='Text button disabled' disabled />
        <Button top={12} variant='text' text='Outlined button disabled' isLoading />
      </View>
    </View>
  ))
