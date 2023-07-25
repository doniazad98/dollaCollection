import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Pressable } from '.'
import Spacing from '@/constants/Spacing'
import { Text } from '../Text'
import { View } from '../View'

storiesOf('Pressable', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('main', () => (
    <ScrollView
      contentContainerStyle={{
        padding: 8,
      }}
    >
      <Pressable center>
        <Text variant={'b1'}>Centered items Pressable</Text>
      </Pressable>
      <Pressable block center top={Spacing.vertical.size40} left={Spacing.horizontal.size12}>
        <Text variant={'b1'}>full width Centered with margins on top and left</Text>
      </Pressable>
      <Pressable horizontal space top={Spacing.vertical.size40}>
        <Text variant={'b1'}>Horizontal Spaced items</Text>
        <Text variant={'b1'}>item 2</Text>
      </Pressable>
      {/*//// Gradients from here ////*/}
      <Pressable top={50} gradient center>
        <Text variant={'b1'}>Centered items Pressable</Text>
      </Pressable>
      <Pressable
        gradient
        block
        center
        top={Spacing.vertical.size40}
        left={Spacing.horizontal.size12}
      >
        <Text variant={'b1'}>full width Centered with margins on top and left</Text>
      </Pressable>
      <Pressable
        gradient
        borderWidth={2}
        borderRadius={16}
        horizontal
        space
        top={Spacing.vertical.size40}
        contentStyle={{paddingHorizontal:20}}
      >
        <Text variant={'p1'}>Horizontal Spaced items</Text>
        <Text variant={'p1'}>gradient border</Text>
      </Pressable>
    </ScrollView>
  ))
