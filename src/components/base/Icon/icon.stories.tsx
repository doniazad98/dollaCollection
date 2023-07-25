import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import iconsList from '../../../../selection.json'
import { Icon } from '.'
import { View } from '../View'
import type TIcon from '@/types/Icon'
import { Text } from '../Text'

const iconsClasses = iconsList.icons.map((e) => e.properties.name) as TIcon[]

storiesOf('Icon', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('main', () => (
    <ScrollView
      contentContainerStyle={{
        padding: 8,
      }}
    >
      {iconsClasses.map((icon) => (
        <View
          key={icon}
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 4,
            flexDirection: 'row',
            margin: 8,
            padding: 8,
          }}
        >
          <Icon name={icon} size={32} />
          <Icon name={icon} size={32} color={'gray'} />
          <Text variant={'b1'} style={{ marginLeft: 8 }}>
            {icon}
          </Text>
        </View>
      ))}
    </ScrollView>
  ))
