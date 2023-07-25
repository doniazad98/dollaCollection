import Colors from '@/constants/Colors'
import Spacing from '@/constants/Spacing'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Spacing.vertical.size16,
    borderTopRightRadius: Spacing.vertical.size16,
    bottom: 0,
    elevation: 5,
    left: 0,
    paddingTop: Spacing.vertical.size20,
    // position: 'absolute',
    right: 0,
    shadowColor: Colors.codgray,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
})
