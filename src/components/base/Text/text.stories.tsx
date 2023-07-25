import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text } from '.'
import { View } from '../View'

storiesOf('Text', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('main', () => (
    <View>
      <Text variant='h1'>h1 Text</Text>
      <Text variant='p1'>h1 Text</Text>
      <Text variant='p2'>p2 Text</Text>
      <Text variant='t1'>t1 Text</Text>
      <Text variant='t2'>t2 Text</Text>
      <Text variant='t3'>t3 Text</Text>
      <Text variant='t4'>t4 Text</Text>
      <Text variant='b1'>b1 Text</Text>
      <Text variant='b2'>b2 Text</Text>
      <Text variant='b3'>b3 Text</Text>
      <Text variant='b4'>b4 Text</Text>
      <Text variant='b5'>b5 Text</Text>
    </View>
  ))
