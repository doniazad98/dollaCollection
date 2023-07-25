import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from '../View'
import { Text } from '../Text'

storiesOf('View', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('main', () => (
    <View>
      <View gradient>
        <Text variant={'t1'}>Gradient View default border width 1</Text>
      </View>
      <View
        gradient
        borderWidth={2}
        borderRadius={24}
        top={30}
        left={30}
        horizontal
        space
        containerStyle={{ alignSelf: 'stretch', marginRight: 20 }}
        contentStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
      >
        <Text variant={'t1'}>with</Text>
        <Text variant={'t1'}>gradient</Text>
      </View>
      <View
        borderWidth={2}
        borderRadius={24}
        top={30}
        horizontal
        space
        containerStyle={{ marginRight: 20 }}
        contentStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
      >
        <Text variant={'t1'}>without spaces</Text>
        <Text variant={'t1'}>gradient</Text>
      </View>
      <View gradient center top={30}>
        <Text variant={'t1'}>Gradient centered view</Text>
      </View>
    </View>
  ))
