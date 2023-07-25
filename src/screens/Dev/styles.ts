import Colors from '@/constants/Colors'
import Dimensions from '@/constants/Dimensions'
import Spacing from '@/constants/Spacing'
import { StyleSheet } from 'react-native'

const Constants = {
  paddingHorizontal: Spacing.horizontal.size20,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors?.white,
    flex: 1,
    paddingHorizontal: Constants.paddingHorizontal,
  },
  itemContainer: {
    alignItems: 'center',
    borderBottomColor: Colors.codgray,
    borderBottomWidth: Dimensions.height.size1,
    flex: 1,
    flexDirection: 'row',
    height: Spacing.vertical.size40,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.horizontal.size12,
  },
  text: {
    color: Colors.codgray,
  },
})

export default styles
