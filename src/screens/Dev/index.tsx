import React from 'react'

import { useNavigation } from '@react-navigation/core'

import DevList from './list'
import { items } from './items'

const Dev = () => {
  const { goBack } = useNavigation()
  return <DevList items={items} handleBackPress={goBack} />
}

export default Dev
