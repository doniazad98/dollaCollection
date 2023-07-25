import { getStorybookUI, configure } from '@storybook/react-native'

import './rn-addons'

configure((): void => {
  require('@/components/base/Button/button.stories')
  require('@/components/base/View/view.stories')
  require('@/components/base/Pressable/pressable.stories')
}, module)

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default StorybookUIRoot
