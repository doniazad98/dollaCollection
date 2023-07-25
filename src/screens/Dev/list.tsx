import React from 'react'
import type { FlatListProps } from 'react-native'
import { FlatList } from 'react-native'
import { Text } from '@/components/base/Text'

import type { DevMenuItem, RouteProps, ReactComponent } from './items'
import styles from './styles'
import { View } from '@/components/base/View'
import { Pressable } from '@/components/base/Pressable'
import useNavigateCallbacks from '@/hooks/useNavigateCallbacks'

const noOp = (): void => {}

const RouteDevItem = (item: RouteProps) => {
  const [onPress] = useNavigateCallbacks(item)
  return (
    <Pressable onPress={item.disabled === true ? noOp : onPress} style={styles.itemContainer}>
      <Text variant={'t1'} style={styles.text}>
        {item.label}
      </Text>
    </Pressable>
  )
}

const renderComponent = (Component: ReactComponent) => <Component />

const keyExtractor = (item: DevMenuItem): string =>
  typeof item === 'object' ? item.label : item.displayName || item.name

const renderItem = ({ item }: { item: DevMenuItem }) =>
  typeof item === 'object' ? <RouteDevItem {...item} /> : renderComponent(item)

interface Props extends Omit<Omit<FlatListProps<DevMenuItem>, 'data'>, 'renderItem'> {
  items: DevMenuItem[]
  handleBackPress?: () => void
}

const List = ({ items, ...props }: Props) => (
  <View style={styles.container}>
    <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} {...props} />
  </View>
)

export default List
